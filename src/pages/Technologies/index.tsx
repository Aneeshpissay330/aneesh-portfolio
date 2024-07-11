import { RiReactjsLine } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

type TechnologiesProps = {

}

const Technologies : React.FunctionComponent<TechnologiesProps> = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-400 p-4">
                <TbBrandMongodb className="text-7xl" style={{ color: '#4DB33D' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-400 p-4">
                <SiExpress className="text-7xl" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-400 p-4">
                <RiReactjsLine className="text-7xl" style={{ color: '#61DBFB' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-400 p-4">
                <FaNodeJs className="text-7xl" style={{ color: '#3C873A' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-400 p-4">
                <TbBrandReactNative className="text-7xl" style={{ color: '#087ea4' }} />
            </div>
            
        </div>
    </div>
  )
}

export default Technologies;