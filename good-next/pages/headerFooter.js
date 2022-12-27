import Link from "next/link";

const HeaderFooter=({children})=>{
    return(
        <div>
            <br/> <Link href="/">home</Link>
            <br/> <Link href="/blog/recent">blog/recent</Link>
            <br/> <Link href="/blog">blog</Link>
            <br/> <Link href="/profile">profile</Link>
            <br/> <Link href="/about">about</Link>
            <br/> <Link href="/docs">docs</Link>
            <br/> <Link href="/product">product</Link>
            <br/> <Link href="/product/2/review/3">product/2/review/3</Link>
            <hr/>
            {children}
            <hr/>
            <div>
                it is footer
            </div>

        </div>
    )
}
export default HeaderFooter;