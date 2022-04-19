import { h } from 'preact';

function Nav() {
	return (
		<>
			<nav className="absolute z-40 w-full">
				<div className="grid grid-cols-2 align-middle justify-between p-10 bg-transparent gap-y-8">
					<div className='-rotate-45 border-4 rounded-full w-12 h-12 grid place-items-center'>
						<a className="font-black text-white text-lg" href="/">
							EP
						</a>
					</div>
					<div id='menuButton' className='block md:hidden text-white justify-self-end'>MENU</div>
					<div id='navOptions' className='hidden justify-self-start bg-black md:bg-transparent md:justify-self-end md:flex md:flex-row md:space-x-8 text-lg text-white justify-end z-40'>
						<a href="#about" className="hover:underline underline-offset-2">
							About Me
						</a>
						<a href="#proyects" className='hover:underline underline-offset-2'>
							Proyects
						</a>
						<a href="#technologies" className='hover:underline underline-offset-2'>
							Technologies
						</a>
						<a href="#contact" className='hover:underline underline-offset-2'>
							Contact
						</a>
					</div>
				</div>
			</nav>
			<script type='text/javascript'>
				const button = document.querySelector('#menuButton');
				const navOptions = document.querySelector('#navOptions');
				let state = false;
				
				button.addEventListener('click', function () {'{'}
					if(state) {'{'}
						state = !state;
						navOptions.classList.remove('grid');
						navOptions.classList.add('hidden');
					{'}'} else {'{'}
						state = !state;
						navOptions.classList.remove('hidden');
						navOptions.classList.add('grid');
					{'}'}
				{'}'});
			</script>
		</>
	);
}
export default Nav;
