import Noise from "@/components/noise";

const Home = () => {
    return (
        <div className="min-h-visible h-full w-full relative bg-[#163a45]">
            <main className="h-full w-full flex justify-center items-center">
                <span className="text-[#dbe1c7] text-4xl tracking-widest font-bold underline underline-offset-4">NOISE</span>
            </main>

            <Noise />
        </div>
    )
}

export default Home;
