import FarmaImg from '../../assets/Farma.png';

function Home() {
    return (
        <>
            <div className=" bg-amber-300 flex justify-center">
                <div className='container grid grid-cols-2  text-amber-950'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Farmamel
                        </h2>
                        <p className='text-xl'>
                            Onde sua saúde é realmente importante!
                        </p>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src={FarmaImg}
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home