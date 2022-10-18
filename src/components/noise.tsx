import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const Noise = (props: Props) => {
    return (
        <div {...props} className="fixed top-0 bottom-0 left-0 right-0 h-full w-full z-50 pointer-events-none">
            <div className="relative h-full w-full pointer-events-none">
                <div id="noise" ></div>
            </div>
        </div>
    )
}

export default Noise;