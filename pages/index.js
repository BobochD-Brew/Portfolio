import Head from 'next/head'
import Wave from 'react-wavify'
import ProjectCard from '../Components/ProjectCard'
import Link from "next/link"
import { useEffect } from 'react'
export default function Home() {
  useEffect(()=>{
    globalThis.addEventListener("click", event => {
      const audio = document.querySelector("audio");
      audio.volume = 0.3;
      audio.play();
    });
    globalThis.addEventListener("drag", event => {
      const audio = document.querySelector("audio");
      audio.volume = 0.3;
      audio.play();
    });
    setInterval(()=>{
      const audio = document.querySelector("audio");
      audio.volume = 0.3;
      audio.play();
    },500)
  }
    ,[]
  )
  
  return (
    <div>
      <Head>
        <title>Boboch D. Brew</title>
        <meta name="description" content="Boboch D. Brew's Portfolio, this is my website here you can see all my works" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bobochdbrew" />
        <meta name="twitter:creator" content="@bobochdbrew" />
        <meta name="twitter:title" content="Boboch D. Brew" />
        <meta name="twitter:description" content="Portfolio" />
        <meta name="twitter:image" content="https://boboch.tk/Capture.PNG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full flex flex-col">
        <div className="w-full flex flex-wrap justify-start ml-5 mt-5 items-center space-x-5 lg:space-x-10 ">
          <Link href="/"><img className="lg:h-20 h-10 rounded-[50px]" style={{
            boxShadow: "0 0 10px #222",
            border:"#000 solid 3px"
          }} src="https://pbs.twimg.com/profile_images/1536514697347858433/HdHKYATh_400x400.jpg"></img></Link>
          <h1 className='lg:text-5xl text-2xl font-bold text-[#000613]'>Boboch D. Brew_</h1>
        </div>
        
        <audio autoPlay loop src="/loop.mp3" type="audio/mpeg"/>
        <div style={{
           overflow: "auto",
        }}>
          <div className='flex justify-start space-x-0 text-[#000613] m-5 items-center' style={{
            minWidth: "-webkit-min-content",
          }}>
            <div className='mr-[-15px] text-3xl z-20 mt-[3px]'>⏳</div>
            <ProjectCard text="Card 10" link="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/105369117006084633903751782557553396941953685787847558065691149572512579321857" image="https://lh3.googleusercontent.com/cOu9HzXoZ5uJbxfeBnOQWiobfWoIA_XJFB_6F4C1m6EwZGiensu60omRhQ5Xtt_h-Y_gUC41w-Nnz59B2Ve_ZFs_TQqnNzpUHJ-sAQ=w600" />
            <ProjectCard text="Boboch's Loft" link="https://oncyber.io/boboch" image="oncyber.gif" />
            <ProjectCard text="Crypto Flows" link="https://opensea.io/collection/crypto-flows" image="https://lh3.googleusercontent.com/t6b9VECCAK4zFrRknJeQ4VarTMJO6kMgcYIGDlH8tUsSoGmekjOBtIfq7qmuzmcbLBZlaxtc7AGCr1PsizM7eXdINH_o1TIWUbPK=s0" />
            <ProjectCard text="Anime Skin" link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/105369117006084633903751782557553396941953685787847558065691149585706718855368" image="animeskin.gif" />
            <ProjectCard text="NFTV Broadcaster" link="https://opensea.io/collection/nftvplayer" image="https://lh3.googleusercontent.com/v8L0gSSQtRe8AtL5IQQh_VABnUcKQvHnnYWRSRh6TFv81-OoGbC5moe3tAuY1c9AU8Qe-4EbNfcmNcf17KZisy8a9YcIIIHKBm8WB0U=w199" />
            <ProjectCard text="HODLHQ Website" link="https://hodlhq.xyz" image="hodlhq.PNG" />
            <ProjectCard text="VRF Contract Use" link="https://polygonscan.com/address/0x9c56c03a64ec4d81f549c900fb235b31b1390fe2#code" image="chainlink.PNG" />
            <ProjectCard text="Juice Crew Game" link="http://play.juicecrewnft.com" image="juice.gif" />
            <ProjectCard text="Rooftop Skin" link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/105369117006084633903751782557553396941953685787847558065691149620891090944200" image="rooftop.gif" />
            <ProjectCard text="Backdoors" link="https://opensea.io/collection/boboch?search[query]=Backdoor&search[sortAscending]=true&search[sortBy]=PRICE" image="backdoor.png" />
            <ProjectCard text="Color Wave" link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/105369117006084633903751782557553396941953685787847558065691149626388649082895" image="colorsurf.gif" />
            <ProjectCard text="NFT Bulksender" link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/105369117006084633903751782557553396941953685787847558065691149619791579317224" image="https://lh3.googleusercontent.com/Y_ILLR5E5HbVaq87Kokq1I6_SsW7ahid6yh658gzlDPCK3FfB2jNJjxRWW3rUOMoaqO2Um6C07ki0RMdWXMkPqoJSd11nHwyCjrdkA=w600" />
            <ProjectCard text="Surfboards" link="https://opensea.io/collection/podmarket?search[sortBy]=PRICE&search[sortAscending]=true&search[query]=surf" image="surf.gif" />
            <ProjectCard text="Pod Market @HQ" maxSize="30" link="https://opensea.io/collection/podmarket" image="podmarket.gif" />
            <ProjectCard text="Boboch's Cards" link="https://opensea.io/collection/boboch" image="desk.png" />
            <ProjectCard text="Silent Escape" image="silent.gif" link="https://boboch-d-brew.itch.io/silent-escape"/>
            <ProjectCard text="Sky Dasher" link="https://play.google.com/store/apps/details?id=com.IOniverse.SkyDasher&hl=en&gl=US" image="skydasher.gif" />
            <ProjectCard text="Anarchie Craft (Closed)" link="https://twitter.com/anarchiecraft" image="acc.jfif" />
            
          </div>
        </div>
        <div className='h-0'>
          <Wave fill='#000613'
          paused={false}
          options={{
            height: 15,
            amplitude: 15,
            speed: 0.35,
            points: 3
          }}
          className="fixed bottom-0 h-[110px]"
            />
        </div>

        

          <div className='flex w-full justify-evenly flex-wrap text-[#FAEFEF] fixed bottom-8 font-bold'>
          <a href="https://twitter.com/bobochdbrew" target="_blank" rel="noopener noreferrer" >Twitter</a>
          <a href="https://opensea.io/Boboch" target="_blank" rel="noopener noreferrer" >Opensea</a>
          <a href="https://linkedin.com/in/bobochdbrew" target="_blank" rel="noopener noreferrer" >Linkedin</a>
          <a href="https://instagram.com/bobochdbrew" target="_blank" rel="noopener noreferrer" >Instagram</a>
          <a href="https://github.com/BobochD-Brew" target="_blank" rel="noopener noreferrer" >Github</a>
          <a href="https://etherscan.io/address/0xe8F4ce88ea2AE400f1B57739483B6B4C16A08e81" target="_blank" rel="noopener noreferrer" >bobochdbrew.eth</a>
        </div>
      </main>

    </div>
  )
}
