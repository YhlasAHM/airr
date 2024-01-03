import React from 'react'

import img_one from '../../../assets/images/about_img1.png'
import img_two from '../../../assets/images/about_img2.png'
import About_card from '../../About_card/About_card'
import { useParams } from 'react-router'
import Content from '../../Content/Content'

const About_detail = () => {

    const { id } = useParams()

    const handle_active = () => {
        const collapse__ = document.querySelector('.collapse__')
        collapse__.classList.toggle('active')
    }


    const handle_active_one = () => {
        const collapse___ = document.querySelector('.collapse___')
        collapse___.classList.toggle('active')
    }


    return (
        <>
            <div className='About_detail mt-3 mb-5'>
                <div className="container">
                    <div className='mb-5'>
                        <About_card title={id == 1 ? 'Howa menizilinin taryhy' : 'Adminstratsiýa we Howa Menziliň Gulluklary'} content='' image={id == 1 ? img_one : img_two} one={2} two={1} button_='' />
                    </div>
                    {
                        id == 1 ?
                            <div className='id_one'>
                                <div>
                                    <h2>Türkmenistanyň raýat awiasiýasynyň taryhy</h2>
                                    <p>Türkmenistanyň raýat awiasiýasynyň taryhy öz gözbaşyny 1927-nji ýyldan alyp gaýdýar, şol wagt Çärjewi Dörtgüliň we Täze Ürgenjiň üsti bilen Daşhowuza birleşdirilen ilkinji howa gatnawy açyldy. Bu howa ýolunda Çärjew awiakärhanasy Germaniýadan satyn alnan “Ýunkers” ÝU-13 dört orunlyk ýolagçy uçarlaryny we Sowet soýuzynda öndürilen K-4 uçarlaryny ulanypdyr. Jemi 8 uçar hereket edipdir.</p>
                                </div>
                                <div className='mb-5'>
                                    <h2>Ilkinji howa menzili</h2>
                                    <p>1932-nji ýylda Türkmenistanyň raýat howa flotunyň üsti täze sowet ýolagçy uçarlary bilen ýetirilýär. Olar alty orunlyk K-5 we on iki orunlyk ANT9 uçarlardy. Olaryň binýadynda 1932-nji ýylda Çärjew howa menziliniň awiabölümçesi döredilýär, ol aralyk aerodromsyz, gönüden-göni Çärjew – Daşhowuz awiaýoluna hyzmat edip başlaýar. Aşgabat şäherinde ilkinji howa menzili 1932-nji ýylda gurulýar we 1934-nji ýylyň ahyrynda onda iki awiabölümçe açylýar: olaryň biri Po-2 uçarlary (oba hojalygynda ulanmak üçin) toplumlaşdyrylýar, beýlekisi bolsa, TB-3 (ýükleri daşamak) uçarlardan ybarat bolýar.</p>
                                </div>
                                <div className='mb-5'>
                                    <img src={img_one} alt="" className='img-fluid' />
                                </div>
                                <div>
                                    <p>
                                        1944-nji ýylda Türkmenistanyň awiaparkynyň üsti ilkinji Li-2 uçarlary bilen ýetirilýär, olarda Bakunyň, Astrahanyň we Wolgogradyň üsti bilen Aşgabatdan Moskwa ýolagçylary we poçtalary gatnadypdyrlar. 1946-njy ýyldan SSSR-iň we Türkmenistanyň (şol wagt SSSR-iň düzümine girýän respublika hökmünde) howa ýollarynda täze Il-12, Il-14, An-2, Ýak-12 sowet uçarlary ulanylyp başlaýar. 1956-njy ýylyň sentýabrynda ilkinji yzygiderli gatnawlary reaktiw raýat awiasiýasynyň ilkinjisi – Tu-114, Il-18, An-24 uçarlary peýda bolýar. Kuwwaty uçarlar Türkmenistany howa ýollary bilen SSSR-iň iri administratiw we medeni merkezleri, soýuz respublikalarynyň paýtagtlary, şypahana we beýleki şäherler bilen baglaşdyrmaga mümkinçilik berdi. 50-nji ýyllaryň başlaryndan respublikanyň halk hojalygynda dikuçarlar giňden peýdalanyp başlanýar. Awiasiýa oba hojalygynda baglar we üzümçilikler işlenende, gowaçalaryň defolýasiýasynda ulanylýar. 60-njy ýyllaryň ahyrynda Türkmenistanyň raýat awiasiýasy ýolagçylary uzak aralyklara gatnamakda möhüm ähmiýete eýe bolýär, uçar parkynyň ýolagçy sygymlylygynyň we ýük göterijiliginiň artanlygy sebäpli, awiaulagyň täjirçilik tizligi üzül-kesil ýokarlanýar. Ulagyň köpçülekleýin görnüşi bolmak bilen, raýat howa floty daşamalaryň ýokary ösüş depginini üpjün edýär.
                                    </p>
                                </div>
                            </div> :
                            <div className='id_two'>
                                <div className='collapse_'>
                                    <button className='mb-2 w-100 fw-bold' onClick={() => handle_active()} >Administrasiya</button>
                                    <div className='collapse__'>
                                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                                            {
                                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                                                    <div className="col" key={item}>
                                                        <Content
                                                            title='Esasy elektron salgysy'
                                                            btn_one={true} icon_one='phone'
                                                            icon_content_one='asb@ashgabatairport.gov.tm'
                                                            btn_two={true}
                                                            icon_two="email"
                                                            icon_content_two='asb@ashgabatairport.gov.tm'
                                                            btn_three={true}
                                                            icon_three="email"
                                                            icon_content_three='asb@ashgabatairport.gov.tm' />

                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='collapse_ mt-5'>
                                    <button className='mb-2 w-100 fw-bold' onClick={() => handle_active_one()} >Howa Menzilinin Gulluklary</button>
                                    <div className='collapse___'>
                                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                                            {
                                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                                                    <div className="col" key={item}>
                                                        <Content
                                                            title='Esasy elektron salgysy'
                                                            btn_one={true} icon_one='phone'
                                                            icon_content_one='asb@ashgabatairport.gov.tm'
                                                            btn_two={true}
                                                            icon_two="email"
                                                            icon_content_two='asb@ashgabatairport.gov.tm'
                                                            btn_three={true}
                                                            icon_three="email"
                                                            icon_content_three='asb@ashgabatairport.gov.tm' />

                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default About_detail