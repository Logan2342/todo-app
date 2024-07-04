import React from 'react';


const Header = () => {
    return (
        <div className="mx-auto w-full">
            <header className="w-full border-dotted border-red-500 border-4">
                <nav>
                    <ul className="flex flex-row items-center justify-between w-full px-4">
                        <li className="h-12 flex items-center justify-center bg-gray-200 px-4">About</li>
                        <li className="h-12 flex items-center justify-center bg-gray-200 px-4">Todos</li>
                        <li className="h-12 flex items-center justify-center bg-gray-200 px-4">Create a Todo</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;



