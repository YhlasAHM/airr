import React from 'react'

import './About_detail.css'

import img_one from '../../../assets/images/about_img1.png'
import img_two from '../../../assets/images/about_img2.png'
import About_card from '../../About_card/About_card'
import { useParams } from 'react-router'
import Content from '../../Content/Content'
import { Translate } from '../../Translate/Translate'

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
                        <About_card title={id == 1 ? 'about_pg_card_one' : 'about_pg_card_two'} content='' image={id == 1 ? img_one : img_two} one={2} two={1} button_='' />
                    </div>
                    {
                        id == 1 ?
                            <div className='id_one'>
                                <div>
                                    <h2><Translate title='about_pg_detail_text' /></h2>
                                    <p><Translate title='about_pg_detail_text_one' /></p>
                                </div>
                                <div className='mb-5'>
                                    <h2><Translate title='about_pg_detail_text_two' /></h2>
                                    <p><Translate title='about_pg_detail_text_three' /></p>
                                </div>
                                <div className='mb-5'>
                                    <img src={img_one} alt="" className='img-fluid' />
                                </div>
                                <div>
                                    <p>
                                        <Translate title='about_pg_detail_text_four' />
                                    </p>
                                </div>
                            </div> :
                            <div className='id_two'>
                                <div className='collapse_'>
                                    <button className='mb-2 w-100 fw-bold' onClick={() => handle_active()} ><Translate title="about_pg_detail_button" /></button>
                                    <div className='collapse__'>
                                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                                            <div className="col">
                                                <Content
                                                    title='Esasy elektron salgysy'
                                                    btn_one={true} icon_one='message'
                                                    icon_content_one='asb@ashgabatairport.gov.tm'
                                                    btn_two={false}
                                                    icon_two=""
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa menziliniň baş direktory'
                                                    btn_one={true} icon_one='message'
                                                    icon_content_one='gendirector@ashgabatairport.gov.tm'
                                                    btn_two={false}
                                                    icon_two=""
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa menziliniň Baş direktorynyň orunbasary'
                                                    btn_one={true} icon_one='message'
                                                    icon_content_one='deputydirector@ashgabatairport.gov.tm'
                                                    btn_two={false}
                                                    icon_two=""
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa menziliniň baş direktorynyň kömekçisi'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 234923'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='dirassistant@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Uçuşlaryň howpsuzlygyny dolandyrmak we Hil bölüminiň başlygy'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 233540 ( факс )'
                                                    btn_two={true}
                                                    icon_two="phone"
                                                    icon_content_two='+993 12 233490'
                                                    btn_three={true}
                                                    icon_three="message"
                                                    icon_content_three='quality@ashgabatairport.gov.tm'
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa menziliniň Merkezi önümçilik-dispetçer gullugy'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 234183'
                                                    btn_two={true}
                                                    icon_two="phone"
                                                    icon_content_two='+993 12 443214'
                                                    btn_three={true}
                                                    icon_three="message"
                                                    icon_content_three='headops@ashgabatairport.gov.tm'
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa menziliniň howa hereketini dolandyryş gullugynyň başlygy'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 230199'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='chiefatc@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa hereketini dolandyryş gullugy - Etrap merkeziniň başlygy'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 233354'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='chiefacc@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa hereketimiň guramagyň bir bitewi ulgamynyň Baş merkeziniň raýat sektory - howa menzilinde'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 233810'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='permission@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Ýöriteleşdirilen awtoulaglar gullugynyň başlygy'
                                                    btn_one={true} icon_one='message'
                                                    icon_content_one='specialtranspoirt@ashgabatairport.gov.tm'
                                                    btn_two={false}
                                                    icon_two=""
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa menziliniň umumy bölüminiň başlygy'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 234409'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='titaldep@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa menziliniň önümçilik-dispetçer gullugynyň başlygy'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 236007'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='aviaoper@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Buhgalteriýa hasabaty bölüminiň başlygy'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 233792'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='accounting@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Merkezi önümçilik dispetçeri'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 234446'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='ops@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Poçta ýük daşamalaryna hyzmat edýän gullugynyň başlygy'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 234592'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='cargo@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Şertnamalar bölüminiň başlygy'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 233347'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='contract@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa menziliniň VIP-yň başlygy'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 378575'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='vip@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa menziliniň ýolagçylara hyzmat ediş gullugynyň başlygy'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 230146'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='servicepas@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa menziliniň ýolagçylara hyzmat ediş gullugy - arz-şykaýat bölümi'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 232035'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='lostandfound@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Ýolagçylara hyzmat edýän gullugynyň başlygy'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='servicepas@ashgabatairport.gov.tm'
                                                    btn_two={false}
                                                    icon_two=""
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Ýolagçylara hyzmat edýän gullugy'
                                                    btn_one={true} icon_one='phone'
                                                    icon_content_one='+993 12 232035'
                                                    btn_two={true}
                                                    icon_two="message"
                                                    icon_content_two='servicepas@ashgabatairport.gov.tm'
                                                    btn_three={false}
                                                    icon_three=""
                                                    icon_content_three=''
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='collapse_ mt-5'>
                                    <button className='mb-2 w-100 fw-bold' onClick={() => handle_active_one()} ><Translate title="about_pg_detail_button_one" /></button>
                                    <div className='collapse___'>
                                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                                            <div className="col">
                                                <Content
                                                    title='Howa Menziliniň Gulluklary'
                                                    btn_one={false} icon_one='phone'
                                                    icon_content_one=''
                                                    btn_two={false}
                                                    icon_two="email"
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three="email"
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Poçta we ýük gatnawy guraýan gullugy'
                                                    btn_one={false} icon_one='phone'
                                                    icon_content_one=''
                                                    btn_two={false}
                                                    icon_two="email"
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three="email"
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className='col'>
                                                <Content
                                                    title='Buhgalteriýa hasabaty we hasabatlyk bölümi'
                                                    btn_one={false} icon_one='phone'
                                                    icon_content_one=''
                                                    btn_two={false}
                                                    icon_two="email"
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three="email"
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Aerowokzal toplumyny ulanyş we tehniki abatlaýyş gullugy'
                                                    btn_one={false} icon_one='phone'
                                                    icon_content_one=''
                                                    btn_two={false}
                                                    icon_two="email"
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three="email"
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa hereketini dolandyryş gullugy'
                                                    btn_one={false} icon_one='phone'
                                                    icon_content_one=''
                                                    btn_two={false}
                                                    icon_two="email"
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three="email"
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Heläkçilikde-halas ediş we ýangyn bilen göreşmek gullugy (HHE we ÝGG)'
                                                    btn_one={false} icon_one='phone'
                                                    icon_content_one=''
                                                    btn_two={false}
                                                    icon_two="email"
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three="email"
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Aerodrom gullugy'
                                                    btn_one={false} icon_one='phone'
                                                    icon_content_one=''
                                                    btn_two={false}
                                                    icon_two="email"
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three="email"
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='VIP we CIP gullugy'
                                                    btn_one={false} icon_one='phone'
                                                    icon_content_one=''
                                                    btn_two={false}
                                                    icon_two="email"
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three="email"
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Ýolagçy gatnawlary guraýan gullugy'
                                                    btn_one={false} icon_one='phone'
                                                    icon_content_one=''
                                                    btn_two={false}
                                                    icon_two="email"
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three="email"
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Uçuşlaryň howpsuzlygyny we hilini dolandyryjy bölümi'
                                                    btn_one={false} icon_one='phone'
                                                    icon_content_one=''
                                                    btn_two={false}
                                                    icon_two="email"
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three="email"
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Ýangyç-çalgy serişdeleri gullugy'
                                                    btn_one={false} icon_one='phone'
                                                    icon_content_one=''
                                                    btn_two={false}
                                                    icon_two="email"
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three="email"
                                                    icon_content_three=''
                                                />
                                            </div>
                                            <div className="col">
                                                <Content
                                                    title='Howa hereketini dolandyrmagyň bitewi ulgamynyň baş merkeziniň baş bölümçesi'
                                                    btn_one={false} icon_one='phone'
                                                    icon_content_one=''
                                                    btn_two={false}
                                                    icon_two="email"
                                                    icon_content_two=''
                                                    btn_three={false}
                                                    icon_three="email"
                                                    icon_content_three=''
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div >
        </>
    )
}

export default About_detail