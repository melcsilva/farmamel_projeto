import FarmaLogo from "../../assets/FarmaLOGO.png"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='h-20 flex justify-center py-4 bg-amber-400 text-amber-950'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="w-40">
                    <img src={FarmaLogo}/>
                    </Link>

                    <div className='flex gap-4'>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categorias</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar