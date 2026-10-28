import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { MAX_DAILY_DEMO_ADS, DEMO_AD_COIN_REWARD, DEMO_AD_XP_REWARD } from '../../services/rewardsService';
import { AVAILABLE_BADGES } from '../../data/challenges';
import {
  Coins,
  Flame,
  Award,
  Video,
  Play,
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ArrowUpRight,
  X
} from 'lucide-react';

export const RewardsCenter: React.FC = () => {
  const { userStats, challenges, watchDemoAd, addToast } = useApp();

  // Demo Ad Simulator State
  const [showAdModal, setShowAdModal] = useState(false);
  const [adState, setAdState] = useState<'prompt' | 'playing' | 'completed' | 'cancelled'>('prompt');
  const [adCountdown, setAdCountdown] = useState(5);
  const [verifiedHash, setVerifiedHash] = useState<string | null>(null);

  const today = new Date().toISOString().split('T')[0];
  const adsWatchedToday = userStats.lastAdWatchDate === today ? userStats.dailyAdsWatched : 0;
  const remainingAds = Math.max(0, MAX_DAILY_DEMO_ADS - adsWatchedToday);

  // Countdown timer for demo ad
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (adState === 'playing' && adCountdown > 0) {
      timer = setTimeout(() => {
        setAdCountdown((prev) => prev - 1);
      }, 1000);
    } else if (adState === 'playing' && adCountdown === 0) {
      // Completed! Fire validation
      const result = watchDemoAd();
      if (result.success && result.txHash) {
        setVerifiedHash(result.txHash);
        setAdState('completed');
      } else {
        setAdState('cancelled');
      }
    }
    return () => clearTimeout(timer);
  }, [adState, adCountdown]);

  const handleStartAd = () => {
    if (remainingAds <= 0) {
      addToast('Has alcanzado el límite diario de simulación (3/3).', 'warning');
      return;
    }
    setAdCountdown(5);
    setAdState('playing');
  };

  const handleCancelAd = () => {
    setAdState('cancelled');
    addToast('Simulación cancelada: No se otorgaron monedas porque el anuncio no finalizó.', 'warning');
    setTimeout(() => {
      setShowAdModal(false);
      setAdState('prompt');
    }, 1200);
  };

  const handleCloseAdModal = () => {
    setShowAdModal(false);
    setAdState('prompt');
    setAdCountdown(5);
    setVerifiedHash(null);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Wallet Balance Hero Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1f1708] via-[#121824] to-[#0c121e] border border-amber-500/40 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider">
              <Coins className="w-3.5 h-3.5 text-yellow-400" />
              Economía Virtual PromptVerse
            </span>
            <div className="flex items-baseline gap-3">
              <h1 className="text-4xl sm:text-6xl font-black text-amber-300 tracking-tight glow-gold">
                {userStats.coins}
              </h1>
              <span className="text-base sm:text-xl font-bold text-amber-400/80">PromptCoins (PC)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Monedas virtuales educativas para desbloquear prompts de nivel Experto y Master. No tienen valor monetario real ni coste económico.
            </p>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400 fill-amber-400 animate-pulse" />
              <div className="text-left md:text-right">
                <span className="text-xs text-slate-400 block">Racha Actual</span>
                <span className="text-sm font-bold text-white">{userStats.streakDays} días seguidos</span>
              </div>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs text-slate-400 block">Nivel y Experiencia</span>
              <span className="text-sm font-bold text-purple-300">
                Nvl {userStats.level} ({userStats.levelName}) — {userStats.xp}/{userStats.maxXp} XP
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Ways to Earn Coins Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Rewarded Video Simulator (DEMO) */}
        <div className="p-6 rounded-3xl bg-[#0f1422] border border-slate-800 flex flex-col justify-between space-y-4 relative overflow-hidden">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg bg-yellow-500/10 text-yellow-300 border border-yellow-500/30">
                <Video className="w-3.5 h-3.5 text-yellow-400" />
                SIMULADOR DE ANUNCIO (MODO DEMO)
              </span>
              <span className="text-xs text-slate-400">
                {adsWatchedToday} de {MAX_DAILY_DEMO_ADS} hoy
              </span>
            </div>

            <h3 className="text-lg font-bold text-white">
              Vídeo Recompensado (Simulación Verificada)
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              Prueba la arquitectura de monetización ética que utilizará la app Android nativa con Google AdMob. Permite ganar monedas virtuales viendo una simulación controlada de 5 segundos.
            </p>

            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-900 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1 text-slate-300 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Protección Antifraude y Cumplimiento:</span>
              </div>
              <p>
                No se conceden monedas con un simple click. Requiere confirmación de finalización, genera un identificador de transacción único y respeta el límite diario de {MAX_DAILY_DEMO_ADS} usos.
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setShowAdModal(true);
                setAdState('prompt');
              }}
              disabled={remainingAds <= 0}
              className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                remainingAds <= 0
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                  : 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-md glow-gold'
              }`}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>
                {remainingAds > 0
                  ? `Abrir Simulador (+${DEMO_AD_COIN_REWARD} PC / +${DEMO_AD_XP_REWARD} XP)`
                  : 'Límite Diario Alcanzado (3/3)'}
              </span>
            </button>
            <div className="text-[10px] text-center text-slate-400">
              Quedan {remainingAds} visualizaciones disponibles hoy en este dispositivo.
            </div>
          </div>
        </div>

        {/* Card 2: Daily Streak & Missions */}
        <div className="p-6 rounded-3xl bg-[#0f1422] border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                CONEXIÓN DIARIA
              </span>
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Activo hoy
              </span>
            </div>

            <h3 className="text-lg font-bold text-white">Racha de Hábitos de Aprendizaje</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Inicia sesión cada día en PromptVerse para mantener tu racha activa y recibir automáticamente un bono diario de +20 PromptCoins y +20 XP.
            </p>

            {/* Streak days visual badges */}
            <div className="grid grid-cols-7 gap-1.5 pt-2">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => {
                const isPassed = day <= userStats.streakDays;
                return (
                  <div
                    key={day}
                    className={`p-2 rounded-xl text-center border text-[11px] font-bold ${
                      isPassed
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                        : 'bg-slate-900 text-slate-500 border-slate-800'
                    }`}
                  >
                    <div>Día {day}</div>
                    <Flame className={`w-3.5 h-3.5 mx-auto mt-1 ${isPassed ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>Próximo bono de conexión:</span>
            <span className="font-semibold text-amber-300">+20 PC mañana</span>
          </div>
        </div>
      </div>

      {/* Daily Challenges Progress */}
      <div className="p-6 rounded-3xl bg-[#0f1422] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white">Retos Diarios de Aprendizaje</h3>
          <span className="text-xs text-slate-400">
            {userStats.completedChallenges.length} completados hoy
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {challenges.map((ch) => (
            <div
              key={ch.id}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-100">{ch.title}</span>
                  {ch.completed && (
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                      Completado
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400">{ch.description}</p>
                <div className="w-32 bg-slate-800 rounded-full h-1.5 mt-1 overflow-hidden">
                  <div
                    className="bg-purple-500 h-full rounded-full transition-all"
                    style={{
                      width: `${Math.min(100, (ch.currentCount / ch.targetCount) * 100)}%`
                    }}
                  />
                </div>
              </div>

              <span className="text-xs font-bold text-amber-300 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0 flex items-center gap-1">
                <Coins className="w-3.5 h-3.5" />
                +{ch.rewardCoins} PC
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History Ledger */}
      <div className="p-6 rounded-3xl bg-[#0f1422] border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white">
          Historial de Movimientos de PromptCoins
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 pb-2">
                <th className="py-2.5 font-semibold">Tipo</th>
                <th className="py-2.5 font-semibold">Concepto</th>
                <th className="py-2.5 font-semibold">Monto</th>
                <th className="py-2.5 font-semibold">Hash de Transacción</th>
                <th className="py-2.5 font-semibold">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {userStats.transactionHistory.map((tx) => (
                <tr key={tx.id} className="text-slate-300">
                  <td className="py-3">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${
                        tx.type === 'earned'
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                      }`}
                    >
                      {tx.type === 'earned' ? '+ Ingreso' : '- Canje'}
                    </span>
                  </td>
                  <td className="py-3 font-medium text-slate-200">{tx.description}</td>
                  <td className="py-3 font-bold font-mono">
                    <span className={tx.type === 'earned' ? 'text-emerald-400' : 'text-rose-400'}>
                      {tx.type === 'earned' ? '+' : '-'}{tx.amount} PC
                    </span>
                  </td>
                  <td className="py-3 font-mono text-slate-400 text-[11px]">{tx.txHash}</td>
                  <td className="py-3 text-slate-400">
                    {new Date(tx.timestamp).toLocaleString('es-ES', {
                      dateStyle: 'short',
                      timeStyle: 'short'
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rewarded Ad Simulator Modal (DEMO MODE) */}
      {showAdModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-md bg-[#0e1424] border border-amber-500/40 rounded-3xl p-6 space-y-5 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">
                  Simulador de Anuncio Recompensado
                </h3>
              </div>
              <button
                onClick={handleCloseAdModal}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content state machine */}
            {adState === 'prompt' && (
              <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200">
                  <strong>Entorno de Demostración:</strong> Este simulador reproduce exactamente el protocolo de callback técnico del SDK de Google AdMob para Android.
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-slate-100">Flujo de Recompensa:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-slate-400">
                    <li>Simulación de reproducción de 5 segundos.</li>
                    <li>Generación de token de verificación criptográfico.</li>
                    <li>Acreditación de +{DEMO_AD_COIN_REWARD} PromptCoins y +{DEMO_AD_XP_REWARD} XP en tu monedero.</li>
                  </ol>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    onClick={handleCloseAdModal}
                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white font-semibold text-xs"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleStartAd}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs shadow-md glow-gold"
                  >
                    Iniciar Simulación (5 seg)
                  </button>
                </div>
              </div>
            )}

            {adState === 'playing' && (
              <div className="space-y-5 text-center py-4">
                <div className="w-20 h-20 rounded-full border-4 border-amber-500/30 border-t-amber-400 animate-spin mx-auto flex items-center justify-center">
                  <span className="text-xl font-black text-white">{adCountdown}s</span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">
                    Reproduciendo Simulación de Vídeo...
                  </h4>
                  <p className="text-xs text-slate-400">
                    Por favor no cierres la ventana. El anuncio finalizará en {adCountdown} segundos.
                  </p>
                </div>

                <button
                  onClick={handleCancelAd}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-rose-400 hover:text-rose-300 text-xs font-semibold"
                >
                  Interrumpir y cancelar recompensa
                </button>
              </div>
            )}

            {adState === 'completed' && (
              <div className="space-y-4 text-center py-2">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">¡Recompensa Verificada!</h4>
                  <p className="text-xs text-slate-300">
                    Se han acreditado <strong>+{DEMO_AD_COIN_REWARD} PromptCoins</strong> y{' '}
                    <strong>+{DEMO_AD_XP_REWARD} XP</strong> en tu cuenta.
                  </p>
                </div>

                {verifiedHash && (
                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-900 text-[10px] font-mono text-slate-400">
                    Hash de Validación: {verifiedHash}
                  </div>
                )}

                <button
                  onClick={handleCloseAdModal}
                  className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md"
                >
                  Continuar
                </button>
              </div>
            )}

            {adState === 'cancelled' && (
              <div className="space-y-3 text-center py-4">
                <AlertCircle className="w-10 h-10 text-rose-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Simulación no completada</h4>
                <p className="text-xs text-slate-400">
                  Las recompensas solo se otorgan al finalizar completamente la visualización.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
