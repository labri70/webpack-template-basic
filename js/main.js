// 웹팩은 진입한 파일 기준('main.js')으로 우선 읽기 때문에 CSS를 여기서 호출해 줍니다!
// 한가지 문제는 웹팩자체는 병합은 할 수 있는데, CSS를 읽어서 처리하려면 별도의 플러그인을 설치해야 합니다.
// 이때 사용할 수 두개의 플러그인이 필요한데, 'css-loader'와 'style-loader'을 같이 설치해 줘야 합니다.
import '../scss/main.scss';

console.log('Webpack!');

