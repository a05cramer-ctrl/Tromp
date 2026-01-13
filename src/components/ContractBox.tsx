import './ContractBox.css'

interface ContractBoxProps {
  onCopy: (message: string) => void
}

const ContractBox = ({ onCopy }: ContractBoxProps) => {
  const contractAddress = 'FZ9yyTzFfTJJQyRxUw2zGbDrUiBN7cPCKSTkQuPzbonk'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      onCopy('Contract address copied!')
    } catch (err) {
      onCopy('Failed to copy')
    }
  }

  return (
    <div className="contract-box" onClick={handleCopy}>
      <div className="contract-label">Contract:</div>
      <div className="contract-address">{contractAddress}</div>
      <div className="contract-hint">Click to copy</div>
    </div>
  )
}

export default ContractBox
