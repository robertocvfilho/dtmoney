import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { NewTransactionModal } from './components/newtransationmodal';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsModalTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsModalTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsModalTransactionOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
    </TransactionsProvider>
  );
}

