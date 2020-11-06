import React, { FC } from 'react';
import Head from 'next/head';
import { LinkText } from '../components/LinkText';
import { Section } from '../components/Section';
import { SectionItem } from '../components/SectionItem';

const Home: FC = () => (
  <div>
    <Head>
      <title>Portfolio</title>
      <meta property='og:title' content='Portfolio' />
      <meta property='og:description' content='About Shuji Kamegaki' />
      <meta
        property='og:image'
        content='https://i.gyazo.com/2bd72195d2ae4dc21169fd9ba97f05ca.png'
      />
      <meta name='twitter:card' content='summary' />
    </Head>
    <div className='container mx-auto px-4'>
      <h1 className='title p-4'>Shuji Kamegaki</h1>
      <Section title='学歴'>
        <SectionItem>東京工業大学　物質理工学院材料系B3</SectionItem>
      </Section>
      <Section title='趣味'>
        <SectionItem>
          トライアスロン（
          <LinkText
            text='東京工業大学トライスロン部'
            link='https://tokyotechtri.wixsite.com/home'
            external={true}
          />
          ）
        </SectionItem>
        <SectionItem>タイピング（e-typing、タイピング速度測定、Weather Typing）</SectionItem>
      </Section>
      <Section title='インターンシップ'>
        <SectionItem>
          株式会社アットゲーム(2019/08~2020/07)： モバイルアプリ「
          <LinkText
            text='カルチャ'
            link='https://apps.apple.com/jp/app/%E3%82%B2%E3%83%BC%E3%83%A0%E5%8F%8B%E9%81%94%E5%8B%9F%E9%9B%86%E3%82%A2%E3%83%97%E3%83%AA-%E3%82%AB%E3%83%AB%E3%83%81%E3%83%A3/id1475195473'
            external={true}
          />
          」の開発。 使用技術：Flutter, Firebase
        </SectionItem>
        <SectionItem>
          クックパッド株式会社(2020/08/24~28)：サマーインターンシップ　Androidアプリ開発コースに参加。
        </SectionItem>
        <SectionItem>
          株式会社エイチームフィナジー(2020/10~現在)：webサイト「
          <LinkText text='ナビナビキャッシング' link='https://a-cashing.com/' external={true} />
          」の開発。 使用技術：Ruby on Rails, typescript(React)
        </SectionItem>
      </Section>
      <Section title='リンク'>
        <SectionItem>
          <LinkText text='Github' link='https://github.com/kmgk' external={true} />
        </SectionItem>
      </Section>
    </div>
  </div>
);

export default Home;
