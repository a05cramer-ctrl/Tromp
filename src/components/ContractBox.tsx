import './ContractBox.css'

interface ContractBoxProps {
  onCopy: (message: string) => void
}

const ContractBox = ({ onCopy }: ContractBoxProps) => {
  const contractAddress = 'EcLFhTywh712KEw6wpkr28FazW8admJ38kvM3zjwbonk'

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
