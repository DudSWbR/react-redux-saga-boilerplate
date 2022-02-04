import React from 'react';
import { Margin, Title, Text } from '~/components/elements';
import ConstructionGIF from '~/assets/under-construction.gif';
import * as S from './styles';

export default function UnderConstruction() {
    return <S.ConstructionHolder>
        <Margin mb={4}>
            <img src={ConstructionGIF} alt="Construction sign" width="400" height="360" />
        </Margin>
        <Margin mb={2}>
            <Title as="1" level='1'>Oops...</Title>
        </Margin>
        <Text level="1">Still working around here</Text>
    </S.ConstructionHolder>
}