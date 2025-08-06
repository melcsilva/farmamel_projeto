function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-amber-400 text-amber-950'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Farmamel</Link>

                    <div className='flex gap-4'>
                    Lista categorias
                    Cadastrar Categoria
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar