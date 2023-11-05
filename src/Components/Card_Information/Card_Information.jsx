import Group_1 from '../../images/Group_1.svg'
const Card_Information = (props) => {
    return (
        <div className={`row ${props.margin_1} ${props.margin_2} d-flex flex-column align-items-center`}>
            <div className="col-lg-10 col-sm-12">
                <div id='OS-card'>
                    <div>
                        <div className='d-flex flex-wrap'>
                          <h2 className="OS-card-title">{props.title}</h2>
                          <img src={Group_1} className='px-3' alt="this is icon"/>
                        </div>
                        <div id='OS-felx'>
                            <div className="row">
                                <div className="col">
                                    <div className='d-flex flex-column gab-3'>
                                        <div>
                                            <p className='OS-Card-paragraphe'>{props.paragraphe_1}</p>
                                            <p className='OS-card-description'>{props.paragraphe_2}</p>
                                        </div>
                                        <div>
                                            <p className='OS-Card-paragraphe'>{props.paragraphe_3}</p>
                                            <p className='OS-card-description'>{props.paragraphe_4}</p>
                                        </div>
                                        <div>
                                            <p className='OS-Card-paragraphe'>{props.paragraphe_5}</p>
                                            <p className='OS-card-description'>{props.paragraphe_6}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <div>
                                            <p className='OS-Card-paragraphe'>{props.paragraphe_7}</p>
                                            <p className='OS-card-description'>{props.paragraphe_8}</p>
                                        </div>
                                        <div>
                                            <p className='OS-Card-paragraphe'>{props.paragraphe_9}</p>
                                            <p className='OS-card-description'>{props.paragraphe_10}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card_Information