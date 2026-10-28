import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { MobileNav } from './components/layout/MobileNav';
import { ToastContainer } from './components/common/ToastContainer';
import { PromptDetailModal } from './components/prompts/PromptDetailModal';

// Views
import { HomeView } from './components/home/HomeView';
import { ExploreView } from './components/explore/ExploreView';
import { PromptBuilder } from './components/builder/PromptBuilder';
import { CommandCenter } from './components/commandCenter/CommandCenter';
import { MasterZone } from './components/master/MasterZone';
import { InfiniteMode } from './components/infinite/InfiniteMode';
import { PersonalLibrary } from './components/library/PersonalLibrary';
import { RewardsCenter } from './components/rewards/RewardsCenter';
import { ArchitectureDocs } from './components/docs/ArchitectureDocs';
import { AdminArchitectureView } from './components/admin/AdminArchitectureView';

const MainLayout: React.FC = () => {
  const { currentView, activePromptDetail, setActivePromptDetail } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderActiveView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'explore':
        return <ExploreView />;
      case 'builder':
        return <PromptBuilder />;
      case 'commandCenter':
        return <CommandCenter />;
      case 'master':
        return <MasterZone />;
      case 'infinite':
        return <InfiniteMode />;
      case 'library':
        return <PersonalLibrary />;
      case 'rewards':
        return <RewardsCenter />;
      case 'docs':
        return <ArchitectureDocs />;
      case 'admin':
        return <AdminArchitectureView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col font-sans selection:bg-purple-600/30 selection:text-purple-200">
      {/* Top Header */}
      <Navbar onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)} />

      {/* Main Body with Sidebar + View Content */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Left Sidebar (Desktop + Mobile Drawer) */}
        <Sidebar
          isOpenMobile={mobileMenuOpen}
          onCloseMobile={() => setMobileMenuOpen(false)}
        />

        {/* Dynamic Main View */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {renderActiveView()}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav />

      {/* Full Prompt Detail Modal */}
      {activePromptDetail && (
        <PromptDetailModal
          prompt={activePromptDetail}
          onClose={() => setActivePromptDetail(null)}
        />
      )}

      {/* Global Notifications Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
