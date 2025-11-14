# FluxGuide

Multi-chain DeFi portfolio tracker with integrated DEX trading and AI-powered explanations.

## Core Functions

1. **Portfolio**: Multi-wallet tracking across Ethereum, Polygon, BSC, Arbitrum, Optimism, Avalanche, Fantom with real-time price feeds
2. **Trading**: Integrated Uniswap, PancakeSwap, SushiSwap, 1inch with automatic best-route finding
3. **AI**: Context-aware Claude assistant explains DeFi concepts, sees portfolio with permission


## Usage

**Portfolio**: Connect wallet → View balances → Click token for details  
**Trade**: Select tokens → Enter amount → Review rate/gas → Approve → Confirm  
**AI**: Click chat → Ask DeFi questions → Get context-aware answers

## Key Features

- Multi-wallet aggregation (max 10)
- Real-time WebSocket price updates
- Automatic token discovery
- Slippage protection (default 0.5%)
- Gas estimation pre-swap
- Transaction history with explorer links
- 90-day portfolio history
- P&L calculations per position
- AI proxy protects API keys (via Firebase Functions)


## Security

- No private key storage
- Verified router contracts only
- Token approval limits
- Slippage/sandwich attack protection
- Transaction simulation before execution
- API keys server-side only

## Common Fixes

**Insufficient liquidity** → Reduce amount or use 1inch  
**Transaction failed** → Increase slippage or check gas  
**AI timeout** → Check API key and rate limits  
**Wrong prices** → Refresh (30-60s delay normal)

Live: https://6000-firebase-studio-1753641382277.cluster-cbeiita7rbe7iuwhvjs5zww2i4.cloudworkstations.dev/


## License

MIT License. 
