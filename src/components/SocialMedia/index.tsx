import React from 'react';
import * as S from './styles';

import { AiOutlineGoogle, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

export type SocialColors = 'gray' | 'white';

export type SocialMediaProps = {
  color?: SocialColors;
};

const SocialMedia = ({ color = 'gray' }: SocialMediaProps) => (
  <S.Wrapper>
    <S.List color={color}>
      <S.Item>
        <AiOutlineGoogle />
      </S.Item>
      <S.Item>
        <AiOutlineTwitter />
      </S.Item>
      <S.Item>
        <FaLinkedinIn />
      </S.Item>
      <S.Item>
        <FaFacebookF />
      </S.Item>
    </S.List>
  </S.Wrapper>
);

export default SocialMedia;
