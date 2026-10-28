import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PROMPTS } from '../../data/prompts';
import { PromptCard } from '../prompts/PromptCard';
import { UserCustomPrompt, UserCollection } from '../../types';
import {
  Bookmark,
  Heart,
  FolderPlus,
  Plus,
  Download,
  Upload,
  Clock,
  Trash2,
  Edit3,
  Copy,
  Check,
  FileJson,
  FileText,
  AlertCircle,
  Database
} from 'lucide-react';

export const PersonalLibrary: React.FC = () => {
  const {
    userStats,
    saveCustomPrompt,
    deleteCustomPrompt,
    createCollection,
    exportJSON,
    exportMarkdown,
    importData,
    addToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<'favorites' | 'custom' | 'collections' | 'history'>('favorites');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);

  // New prompt modal state
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newPrompt, setNewPrompt] = useState('');

  // New collection modal state
  const [newColName, setNewColName] = useState('');
  const [newColDesc, setNewColDesc] = useState('');

  // Import JSON input ref
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const favoritePrompts = PROMPTS.filter((p) => userStats.favoritePromptIds.includes(p.id));
  const usedPrompts = PROMPTS.filter((p) => userStats.usedPromptIds.includes(p.id));

  const handleDownloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(exportJSON());
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', `promptverse_biblioteca_${new Date().toISOString().split('T')[0]}.json`);
    dlAnchorElem.click();
    addToast('Archivo JSON de biblioteca descargado', 'success');
  };

  const handleDownloadMarkdown = () => {
    const dataStr = 'data:text/markdown;charset=utf-8,' + encodeURIComponent(exportMarkdown());
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', `promptverse_biblioteca_${new Date().toISOString().split('T')[0]}.md`);
    dlAnchorElem.click();
    addToast('Archivo Markdown de biblioteca descargado', 'success');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        importData(content);
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleCreatePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newPrompt.trim()) {
      addToast('Por favor introduce al menos un título y el contenido del prompt', 'warning');
      return;
    }
    const custom: UserCustomPrompt = {
      id: 'custom-' + Date.now(),
      title: newTitle.trim(),
      description: newDesc.trim() || 'Prompt creado por el usuario',
      fullPrompt: newPrompt.trim(),
      categoryId: 'cat-20',
      tags: ['Personal'],
      tools: ['Universal'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    saveCustomPrompt(custom);
    setNewTitle('');
    setNewDesc('');
    setNewPrompt('');
    setShowCreateModal(false);
  };

  const handleCreateCollectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newColName.trim()) {
      addToast('Por favor escribe un nombre para la colección', 'warning');
      return;
    }
    createCollection(newColName.trim(), newColDesc.trim());
    setNewColName('');
    setNewColDesc('');
    setShowCollectionModal(false);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header and Sync info */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Bookmark className="w-6 h-6 text-purple-400" />
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Mi Biblioteca Personal
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Gestiona tus prompts favoritos, colecciones privadas, creaciones propias y exportación de datos.
          </p>
        </div>

        {/* Export / Import buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Upload className="w-4 h-4 text-cyan-400" />
            <span>Importar JSON</span>
          </button>

          <button
            onClick={handleDownloadJSON}
            className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <FileJson className="w-4 h-4 text-amber-400" />
            <span>Exportar JSON</span>
          </button>

          <button
            onClick={handleDownloadMarkdown}
            className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Exportar MD</span>
          </button>
        </div>
      </div>

      {/* Local storage transparency notice */}
      <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
        <Database className="w-4 h-4 text-purple-400 shrink-0" />
        <p>
          <strong className="text-slate-200">Almacenamiento Local Activo:</strong> Tus datos están guardados de forma segura en este navegador. Arquitectura preparada para vincular Firebase Firestore en la nube cuando se configure.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('favorites')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'favorites'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>Favoritos ({favoritePrompts.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('custom')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'custom'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Edit3 className="w-4 h-4" />
          <span>Mis Prompts ({userStats.customPrompts.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('collections')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'collections'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <FolderPlus className="w-4 h-4" />
          <span>Colecciones ({userStats.collections.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'history'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Historial de Uso ({userStats.usedPromptIds.length})</span>
        </button>
      </div>

      {/* Tab 1: Favorites */}
      {activeTab === 'favorites' && (
        <div className="space-y-4">
          {favoritePrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {favoritePrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-slate-800 space-y-3">
              <Heart className="w-10 h-10 text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-300">Aún no tienes prompts favoritos</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Pulsa el icono de corazón en cualquier tarjeta de la biblioteca para guardarlo aquí y acceder rápidamente.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Custom Prompts */}
      {activeTab === 'custom' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-300">Tus Prompts Personalizados</h3>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Crear Nuevo Prompt</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userStats.customPrompts.map((cp) => (
              <div
                key={cp.id}
                className="p-5 rounded-2xl bg-[#0f1422] border border-slate-800 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-purple-400">
                      {cp.tools.join(', ')}
                    </span>
                    <button
                      onClick={() => deleteCustomPrompt(cp.id)}
                      className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                      title="Eliminar prompt"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <h4 className="text-base font-bold text-white">{cp.title}</h4>
                  <p className="text-xs text-slate-300">{cp.description}</p>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 font-mono text-xs text-slate-300 line-clamp-3">
                    {cp.fullPrompt}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                  <span className="text-[10px] text-slate-500">
                    Creado: {new Date(cp.createdAt).toLocaleDateString('es-ES')}
                  </span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(cp.fullPrompt);
                      addToast('¡Prompt copiado al portapapeles! 📋', 'success');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Collections */}
      {activeTab === 'collections' && (
        <div className="space-y-4">
          {selectedCollectionId ? (
            (() => {
              const selectedCol = userStats.collections.find((c) => c.id === selectedCollectionId);
              if (!selectedCol) return null;
              const colPrompts = PROMPTS.filter((p) => selectedCol.promptIds.includes(p.id));

              return (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedCol.color || '#8b5cf6' }} />
                        <h3 className="text-base font-bold text-white">{selectedCol.name}</h3>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{selectedCol.description}</p>
                    </div>
                    <button
                      onClick={() => setSelectedCollectionId(null)}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
                    >
                      ← Volver a Colecciones
                    </button>
                  </div>

                  {colPrompts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {colPrompts.map((prompt) => (
                        <PromptCard key={prompt.id} prompt={prompt} />
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400">
                      Esta colección está vacía. Abre cualquier prompt de la biblioteca y pulsa el icono de carpeta para añadirlo aquí.
                    </div>
                  )}
                </div>
              );
            })()
          ) : (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-300">Carpetas y Colecciones Privadas</h3>
                <button
                  onClick={() => setShowCollectionModal(true)}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md cursor-pointer"
                >
                  <FolderPlus className="w-4 h-4" />
                  <span>Nueva Colección</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {userStats.collections.map((col) => (
                  <div
                    key={col.id}
                    onClick={() => setSelectedCollectionId(col.id)}
                    className="p-5 rounded-2xl bg-[#0f1422] border border-slate-800 hover:border-purple-500/50 space-y-3 cursor-pointer transition-all hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300">
                        <FolderPlus className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-purple-300 bg-purple-950/40 px-2 py-0.5 rounded-lg border border-purple-800/40">
                        {col.promptIds.length} prompts
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{col.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">{col.description}</p>
                    </div>
                    <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-800/80">
                      <span>Click para ver contenido</span>
                      <span>→</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Tab 4: Usage History */}
      {activeTab === 'history' && (
        <div className="space-y-4">
          {usedPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {usedPrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-slate-800 space-y-2">
              <Clock className="w-10 h-10 text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-300">Historial de uso vacío</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Los prompts que copies o utilices en tu día a día se registrarán aquí para que nunca los pierdas.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Modal: Create Custom Prompt */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#0e1422] border border-slate-700 rounded-3xl p-6 space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white">Crear Nuevo Prompt Personal</h3>
            <form onSubmit={handleCreatePromptSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Título</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ej: Plantilla de Revisión de Contratos"
                  className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Descripción breve</label>
                <input
                  type="text"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Breve resumen de para qué sirve..."
                  className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Contenido del Prompt</label>
                <textarea
                  rows={5}
                  value={newPrompt}
                  onChange={(e) => setNewPrompt(e.target.value)}
                  placeholder="Escribe la instrucción completa..."
                  className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-xs font-mono text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-md"
                >
                  Guardar en Biblioteca
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Create Collection */}
      {showCollectionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#0e1422] border border-slate-700 rounded-3xl p-6 space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white">Nueva Colección Privada</h3>
            <form onSubmit={handleCreateCollectionSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Nombre de la Colección</label>
                <input
                  type="text"
                  value={newColName}
                  onChange={(e) => setNewColName(e.target.value)}
                  placeholder="Ej: Marketing E-commerce Q4"
                  className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Descripción (Opcional)</label>
                <input
                  type="text"
                  value={newColDesc}
                  onChange={(e) => setNewColDesc(e.target.value)}
                  placeholder="Para qué utilizarás este grupo de prompts..."
                  className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCollectionModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-md"
                >
                  Crear Colección
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
