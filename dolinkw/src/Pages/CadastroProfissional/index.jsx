import React from 'react';
import {useFormik} from 'formik';
import MultiStep from '../../components/multiStepForm'
import './index.css';

const CadastroProfissional = () => {   

    return(
        
        <div>
            
            <div className="body2">

                <div className="sectionLargura2">

                    <div className="sectionImagePessoal">

                        <img src="https://media.discordapp.net/attachments/819577034530881567/841297659721678848/unknown.png?" alt="" />

                    </div>

                    <div className="sectionDadosPessoais">


                        <div className="middleSectionPessoal">

                            <MultiStep />

                        </div>

                    </div>


                </div>

            </div>

        </div>

    )

}

export default CadastroProfissional;