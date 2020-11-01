import React from 'react';
import styled from '@emotion/styled';
import ProTypes from 'prop-types';
import { primerMayuscula } from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align:center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    const {marca, plan ,year } = datos;

    if(marca === '' || year === '' || plan === '' ) return null;

    return ( 
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: { primerMayuscula(marca) } </li>
                <li>Plan: { primerMayuscula(plan) } </li>
                <li>Año del Auto: { year } </li>
            </ul>
        </ContenedorResumen>
     );
}

Resumen.protoType = {
    datos:  ProTypes.object.isRequired
}
 
export default Resumen;