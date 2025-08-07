import { Link } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'

interface CardCategoriasProps{
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-amber-400  text-amber-950 font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-3xl text-amber-950 bg-amber-50 h-full'>{categoria.descricao}</p>
            
            <div className="flex">
                <Link to='' 
                    className='w-full bg-amber-400 text-amber-950 hover:bg-amber-600 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to='' className='text-amber-400 bg-amber-800 hover:bg-amber-950 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias