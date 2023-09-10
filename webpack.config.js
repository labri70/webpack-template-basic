// import
const path = require('path');  // NodeJS 전역 모듈
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// export
module.exports = {
  mode: "production",

  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',      

  // 결과물(번들)을 반환하는 설정
  output: {                   
    // 'path'와 'filename' 이 두 옵션을 설정하지 않으면 기본값인 'dist' 폴더로 지정되어 자동 Output이 되게 된다. 
    // path: path.resolve(__dirname, 'main'),  // __dirname <- webpack.config.js 파일이 있는 위치를 기준으로 결과물 출력경로('dist')를 지정
    // filename: 'main.js',
    clean: true               // 기존의 내용인 남지 않도록 삭제하고 새로 번들된 내용이 만들어지도록 'clean' 옵션 사용 
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({      // entry와 template의 지정된 파일을 병합처리 후 'dist'에 넣어줍니다! 
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.s?css$/,  // 정규표현식으로 '.css'로 끝나는 문자가 있을수도 있고 없을수도 있는 문자를 찾습니다.

        // 주의 아래 사용하는 순서를 지키는게 중요합니다! 
        use: [
          'style-loader', // js파일에서 해석된 css의 내용을 html문서에 삽입해 주는 용도의 패키지
          'css-loader',    // js파일에서 css파일을 해석할 수 있도록 해주는 용도의 패키지
          'postcss-loader',
          'sass-loader'    // 웹팩에서 해당하는 scss파일을 읽을 수 있도록 해주는 용도의 패키지
        ]
      },
      {
        test: /\.js$/,   // 정규표현식으로 '.js'로 끝나는 문자가 있을수도 있고 없을수도 있는 문자를 찾습니다.
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 웹팩 서버 관련설정
  devServer:{
    host: '127.0.0.1' 
  }

};