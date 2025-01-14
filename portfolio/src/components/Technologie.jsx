import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpring } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri"

const Technologie = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">
                Technologies
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" /> 
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAngular className="text-7xl text-red-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-blue-500" /> 
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpring className="text-7xl text-green-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiBootstrap className="text-7xl text-purple-700" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiGit className="text-7xl text-orange-500" /> 
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-cyan-400" /> 
                </div>
            </div>
        </div>
    );
};

export default Technologie;
