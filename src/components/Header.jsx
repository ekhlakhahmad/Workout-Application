import React from 'react'
import network from '../assets/network.svg'
import wifi from '../assets/wifi.svg'
import battery from '../assets/battery.svg'

const Header = () => {
  return (
		<div className="w-[375px] shadow-sm p-4 rounded-t-md bg-white flex justify-between">
			<p className="text-md font-semibold p-2">9:41</p>
			<div className="flex gap-2">
				<img src={network} alt="network" />
				<img src={wifi} alt="wifi" />
				<img src={battery} alt="battery" />
			</div>
		</div>
	);
}

export default Header