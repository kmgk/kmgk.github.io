import React, { FC } from 'react';

const Home: FC = () => (
  <div>
    <div className='container mx-auto px-4'>
      <h1 className='title p-4'>Shuji Kamegaki</h1>
      <p className='text-teal-500 py-1 text-2xl'>学歴</p>
      <p>- 東京工業大学　物質理工学院材料系B3</p>
      <p className='text-teal-500 py-1 text-2xl'>趣味</p>
      <p>
        - トライアスロン（
        <a className='text-blue-500' href='https://tokyotechtri.wixsite.com/home'>
          東京工業大学トライアスロン部
        </a>
        ）
      </p>
      <p>- タイピング（e-typing、タイピング速度測定、Weather Typing）</p>
      <p className='text-teal-500 py-1 text-2xl'>インターンシップ</p>
      <p>
        - 株式会社アットゲーム(2019/08~2020/07)： モバイルアプリ「
        <a
          className='text-blue-500'
          href='https://apps.apple.com/jp/app/%E3%82%B2%E3%83%BC%E3%83%A0%E5%8F%8B%E9%81%94%E5%8B%9F%E9%9B%86%E3%82%A2%E3%83%97%E3%83%AA-%E3%82%AB%E3%83%AB%E3%83%81%E3%83%A3/id1475195473'
        >
          カルチャ
        </a>
        」の開発。 使用技術：Flutter, Firebase
      </p>
      <p>- クックパッド株式会社(2020/08/24~28)：サマーインターンシップ　Androidアプリ開発コースに参加。</p>
      <p>
        - 株式会社エイチームフィナジー(2020/10~現在)：webサイト「
        <a className='text-blue-500' href='https://a-cashing.com/'>
          ナビナビキャッシング
        </a>
        」の開発。 使用技術：Ruby on Rails, typescript(React)
      </p>
      <p className='text-teal-500 py-1 text-2xl'>リンク</p>-{' '}
      <a className='text-blue-500' href='https://github.com/kmgk'>
        Github
      </a>
    </div>
  </div>
);

export default Home;
