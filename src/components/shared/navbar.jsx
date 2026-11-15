import Link from "next/link"

const Navbar= ()=>{
    return<>
    <div>
        <ul className="flex gap-10">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link  href={"/calculator"}>Calculator</Link></li>
            <li><Link href={"/baap-er-bank"}>Baaper bank</Link></li>
        </ul>
    </div>
    </>
}
export default Navbar