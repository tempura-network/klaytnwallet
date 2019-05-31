import React from 'react'

import './WalletCreationReminder.scss'
import { KLAYTN_KLAY_UINT } from 'constants/url'
const WalletCreationReminder = () => (
  <div className="WalletCreationReminder">
      Klaytn Wallet is intended for BApp development purposes only. {KLAYTN_KLAY_UINT} has no financial value.<br />
      Klaytn Wallet은 BApp 개발 목적으로만 사용 가능합니다. {KLAYTN_KLAY_UINT}는 금전적 가치를 지니지 않습니다.
  </div>
)

export default WalletCreationReminder
