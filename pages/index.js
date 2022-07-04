import Head from 'next/head'
import Wave from 'react-wavify'
import ProjectCard from '../Components/ProjectCard'
import SkillCard from '../Components/SkillCard'
import Title from '../Components/Title'
import Link from "next/link"
import { useEffect, useState } from 'react'
export default function Home() {
  let [randomState, setRandomState] = useState( (Math.floor(Math.random() * (100 - 0 + 1)) + 0))
  useEffect(()=>{

    globalThis.addEventListener("wheel", function (e) {
      if (e.deltaY > 0) document.getElementById("ScollDiv").scrollLeft += 10;
      else document.getElementById("ScollDiv").scrollLeft -= 10;
    });
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
    let a = setInterval(()=>{
      const audio = document.querySelector("audio");
      audio.volume = 0.3;
      audio.play();
    },2000)
    return(()=>{clearInterval(a)})
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

      <main className="h-full w-full flex flex-col">
        <div className="w-full flex flex-wrap justify-start ml-5 mt-5 items-center space-x-5 lg:space-x-10 ">
          <Link href="/"><img className="lg:h-20 h-10 rounded-[50px]" style={{
            boxShadow: "0 0 10px #222",
            border:"#000 solid 3px"
          }} src="https://pbs.twimg.com/profile_images/1536514697347858433/HdHKYATh_400x400.jpg"></img></Link>
          <Title/>
        </div>
        <audio autoPlay loop src="/loop.mp3" type="audio/mpeg"/>
        <div style={{
        }}> 

        <div id="ScollDiv" style={{
           overflow: "auto",
        }}>
           <div style={{
            }}>
          <div className='flex justify-start space-x-0 text-[#000613] m-5 items-center mr-10' style={{
            minWidth: "-webkit-min-content",
            }}>
            <div className='mr-[-15px] text-3xl z-20 mt-[3px]'>⏳</div>
            <ProjectCard type={"ERC721"} iframe={true} noScale={true} date="07/2022" text="Card 10" link="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/105369117006084633903751782557553396941953685787847558065691149572512579321857" image="https://lh3.googleusercontent.com/cOu9HzXoZ5uJbxfeBnOQWiobfWoIA_XJFB_6F4C1m6EwZGiensu60omRhQ5Xtt_h-Y_gUC41w-Nnz59B2Ve_ZFs_TQqnNzpUHJ-sAQ=w600" />
            <ProjectCard type={"Gallery"} iframe={true} date="06/2022" text="Boboch's Loft" link="https://oncyber.io/boboch" image="oncyber.gif" />
            <ProjectCard type={"ERC721"}  iframe={true} noScale={true} date="03/2022" text="Crypto Flows" link="https://opensea.io/collection/crypto-flows" image="https://lh3.googleusercontent.com/t6b9VECCAK4zFrRknJeQ4VarTMJO6kMgcYIGDlH8tUsSoGmekjOBtIfq7qmuzmcbLBZlaxtc7AGCr1PsizM7eXdINH_o1TIWUbPK=s0" >
              <div className='iframeWrapper w-full h-full relative'>
                <img src="dice.png" className="w-8 h-8 m-1 absolute cursor-pointer" onClick={()=>{
                  setRandomState( (Math.floor(Math.random() * (100 - 0 + 1)) + 0))
                }}style={{
                  right:"0",
                  top:"0",
                
                }}>
            
                </img>
                <iframe src={"https://bobochd-brew.github.io/Crypto-Flow-Htmls/"+randomState+".html"} width="100%" height="100%" frameBorder="0">Browser not compatible.</iframe>
              </div>
            </ProjectCard>
            <ProjectCard type={"ERC721"} iframe={true} noScale={true} oOo={true} date="pending" text="Color Ecosystem" link={"https://bobochd-brew.github.io/Color-Ecosystem/index.html?id="+randomState+""}image="https://lh3.googleusercontent.com/t6b9VECCAK4zFrRknJeQ4VarTMJO6kMgcYIGDlH8tUsSoGmekjOBtIfq7qmuzmcbLBZlaxtc7AGCr1PsizM7eXdINH_o1TIWUbPK=s0" >
              <div className='iframeWrapper w-full h-full relative'>
              <img src="dice.png" className="w-8 h-8 m-1 absolute cursor-pointer" onClick={()=>{
                  setRandomState( (Math.floor(Math.random() * (100 - 0 + 1)) + 0))
                }}style={{
                  right:"0",
                  top:"0",
                  
                }}>
            
                </img>
              <iframe src={"https://bobochd-brew.github.io/Color-Ecosystem/index.html?id="+randomState+""} width="100%" height="100%" frameBorder="0">Browser not compatible.</iframe>
              </div>
            </ProjectCard>
            <ProjectCard type={"ERC1155"} iframe={true} date="03/2022" text="Anime Skin" link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/105369117006084633903751782557553396941953685787847558065691149585706718855368" image="animeskin.gif" />
            <ProjectCard type={"ERC721"} noScale={true} iframe={true} date="06/2022" text="NFTV Broadcaster" link="https://opensea.io/collection/nftvplayer" image="https://lh3.googleusercontent.com/v8L0gSSQtRe8AtL5IQQh_VABnUcKQvHnnYWRSRh6TFv81-OoGbC5moe3tAuY1c9AU8Qe-4EbNfcmNcf17KZisy8a9YcIIIHKBm8WB0U=w199" />
            <ProjectCard type={"Web"} iframe={true} date="06/2022" text="HODLHQ Website" link="https://hodlhq.xyz" image="hodlhq.PNG" />
            <ProjectCard type={"Solidity"} noScale={true} date="06/2022" text="VRF Contract Use" link="https://polygonscan.com/address/0x9c56c03a64ec4d81f549c900fb235b31b1390fe2#code" image="chainlink.PNG" />
            <ProjectCard type={"Game"} noScale={true} iframe={true} date="04/2022" text="Juice Crew Game" link="http://play.juicecrewnft.com" image="juice.gif" />
            <ProjectCard type={"ERC1155"} iframe={true} date="03/2022" text="Rooftop Skin" link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/105369117006084633903751782557553396941953685787847558065691149620891090944200" image="rooftop.gif" />
            <ProjectCard type={"ERC721"} noScale={true} iframe={true} date="03/2022" text="Backdoors" link="https://opensea.io/collection/boboch?search[query]=Backdoor&search[sortAscending]=true&search[sortBy]=PRICE" image="backdoor.png" />
            <ProjectCard type={"ERC1155"} noScale={true} iframe={true} date="03/2022" text="Color Wave" link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/105369117006084633903751782557553396941953685787847558065691149626388649082895" image="colorsurf.gif" />
            <ProjectCard type={"ERC721"} noScale={true} iframe={true} date="03/2022" text="NFT Bulksender" link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/105369117006084633903751782557553396941953685787847558065691149619791579317224" image="https://lh3.googleusercontent.com/Y_ILLR5E5HbVaq87Kokq1I6_SsW7ahid6yh658gzlDPCK3FfB2jNJjxRWW3rUOMoaqO2Um6C07ki0RMdWXMkPqoJSd11nHwyCjrdkA=w600" />
            <ProjectCard type={"ERC1155"} iframe={true} date="02/2022" text="Surfboards" link="https://opensea.io/collection/podmarket?search[sortBy]=PRICE&search[sortAscending]=true&search[query]=surf" image="surf.gif" />
            <ProjectCard type={"ERC1155"} iframe={true} date="02/2022" text="Pod Market @HQ" maxSize="30" link="https://opensea.io/collection/podmarket" image="podmarket.gif" />
            <ProjectCard type={"ERC721"} noScale={true} iframe={true} date="07/2021" text="Boboch's Cards" link="https://opensea.io/collection/boboch" image="hands.gif" />
            <ProjectCard type={"Game"} date="11/2021" text="Silent Escape" image="silent.gif" link="https://boboch-d-brew.itch.io/silent-escape"/>
            <ProjectCard type={"Game"} noScale={true} date="08/2020" text="Sky Dasher" link="https://play.google.com/store/apps/details?id=com.IOniverse.SkyDasher&hl=en&gl=US" image="skydasher.gif" />
            <ProjectCard type={"Server"} noScale={true} date="12/2019" text="AnarchieCraft ❌" link="https://twitter.com/anarchiecraft" image="acc.jfif" />
            <div className='w-20'></div>
          </div>
          <div className='flex justify-start space-x-0 text-[#000613] m-5 items-center' style={{
            minWidth: "-webkit-min-content",
          }}>
            <div className='mr-[-15px] text-3xl z-20 mt-[3px]'>💻</div>
            <div className="w-5 h-0" style={{
            border:"#000 solid 2px",
            
        }}></div>
            <SkillCard iframe={true} text="Next.js" link="https://nextjs.org"/>
            <SkillCard iframe={true} text="Web3.js" link="https://web3js.readthedocs.io/en/v1.7.4/"/>
            <SkillCard iframe={true} text="C" link="https://en.wikipedia.org/wiki/C_(programming_language)"/>
            <SkillCard iframe={true} text="Solidity" link="https://docs.soliditylang.org/en/v0.8.15/"/>
            <SkillCard iframe={true} text="Node.js" link="https://nodejs.org/en/"/>
            <SkillCard iframe={true} text="OCaml" link="https://ocaml.org"/>
            <SkillCard text="Python" link="https://www.python.org"/>
            <SkillCard iframe={true} text="P5.js" link="https://p5js.org"/>
            <SkillCard text="Ino" link="https://www.arduino.cc"/>
            <SkillCard text="Pr" link="https://www.adobe.com/mena_en/products/premiere.html?skwcid=AL!3085!3!442333149740!e!!g!!adobe%20premiere%20pro&mv=search&sdid=LQLZT7BT&ef_id=CjwKCAjw2f-VBhAsEiwAO4lNeBSTowZJc_WamjrQUF1NJ3l-TETFRMk_hIzbb24q9QjVnDCMsQBpZhoCy9kQAvD_BwE:G:s&s_kwcid=AL!3085!3!442333149740!e!!g!!adobe%20premiere%20pro!1463162857!56526993293&gclid=CjwKCAjw2f-VBhAsEiwAO4lNeBSTowZJc_WamjrQUF1NJ3l-TETFRMk_hIzbb24q9QjVnDCMsQBpZhoCy9kQAvD_BwE"/>
            <SkillCard text="Ai" link="https://www.adobe.com/fr/products/illustrator.html?mv=search&mv=search&sdid=KCJMVLF6&ef_id=CjwKCAjw2f-VBhAsEiwAO4lNeN0nKNeQxGeHUzRQkZPACU5NMvJzdgWllGAH2IwdYuIzTpK8QLpRMRoCIwAQAvD_BwE:G:s&s_kwcid=AL!3085!3!341240860988!e!!g!!adobe%20illustrator!1478148655!58836721084&gclid=CjwKCAjw2f-VBhAsEiwAO4lNeN0nKNeQxGeHUzRQkZPACU5NMvJzdgWllGAH2IwdYuIzTpK8QLpRMRoCIwAQAvD_BwE"/>
            <SkillCard text="mySql" link="https://www.talend.com/resources/what-is-mysql/"/>
            <SkillCard text="Php" link="https://www.php.net/manual/en/intro-whatis.php"/>
            <SkillCard iframe={true} text="HTML/CSS" link="https://www.w3.org/standards/webdesign/htmlcss"/>
            <SkillCard text="C#" link="https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/"/>
            <SkillCard text="Js" link="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"/>
            <SkillCard text="Unity" link="https://unity3d.com/unity/whats-new/unity-3.5.7"/>
            <SkillCard text="Ae" link="https://www.adobe.com/fr/products/aftereffects/landpb.html?mv=search&mv=search&sdid=MYYBRYZH&ef_id=CjwKCAjw2f-VBhAsEiwAO4lNeCHBpn785gxbX7XUNdd1cJDCM6ZVKVfi469PsTXd9mKZnCyfTL2E0RoCVzIQAvD_BwE:G:s&s_kwcid=AL!3085!3!600183845669!e!!g!!after%20effect!10399849568!98633512770&gclid=CjwKCAjw2f-VBhAsEiwAO4lNeCHBpn785gxbX7XUNdd1cJDCM6ZVKVfi469PsTXd9mKZnCyfTL2E0RoCVzIQAvD_BwE"/>
            <SkillCard text="Ps" link="https://www.adobe.com/mena_en/products/photoshop/landpb.html?skwcid=AL!3085!3!442333149557!e!!g!!photoshop&mv=search&sdid=LZ32SYVR&ef_id=CjwKCAjw2f-VBhAsEiwAO4lNeF1fiMwWkZ9Tega4dLgbFnbVq7CWB5XR1yLguVj4NXOJ9rY-gJIyJhoCxjsQAvD_BwE:G:s&s_kwcid=AL!3085!3!442333149557!e!!g!!photoshop!1463162770!56526981733&gclid=CjwKCAjw2f-VBhAsEiwAO4lNeF1fiMwWkZ9Tega4dLgbFnbVq7CWB5XR1yLguVj4NXOJ9rY-gJIyJhoCxjsQAvD_BwE"/>
            <SkillCard text="C4d" link="https://www.maxon.net/en/cinema-4d"/>
            <SkillCard text="Blender" link="https://www.blender.org"/>
            <SkillCard text="Construct 2" link="https://www.construct.net/en/construct-2/download"/>
            <SkillCard text="Vba" link="https://www.commentcamarche.net/telecharger/developpement/23261-visual-basic-express-2008/"/>
            <SkillCard iframe={true} text="Game Maker" link="https://gamemaker.io/en/blog/gamemaker-studio-1-dot-4-9999-released"/>
            <SkillCard iframe={true} text="GDevelop" link="https://gdevelop.io"/>
            <SkillCard iframe={true} text="Rpg Maker" link="https://www.rpgmakerweb.com/products/rpg-maker-2003"/>
            <SkillCard text="Hello World" link="https://www.google.com/maps/place/Marrakech"/>
          </div>
          </div>
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
