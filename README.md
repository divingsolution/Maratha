# 다이빙솔루션 데라완 투어 샘플

별도 빌드가 필요 없는 정적 HTML입니다. index.html을 열어 확인할 수 있습니다.

## GitHub → Vercel
1. 이 폴더의 파일 전체를 GitHub 저장소 루트에 업로드합니다.
2. Vercel에서 해당 저장소를 Import합니다.
3. Framework Preset은 Other, Build Command는 비워두고, Output Directory는 `.`로 설정합니다.
4. Deploy 후 기존 홈페이지에서 배포 URL을 연결하거나, 같은 파일들을 홈페이지의 별도 경로에 게시합니다.

실제 GitHub 업로드 및 Vercel 배포는 수행하지 않았습니다. 연결할 저장소와 계정이 제공되지 않았습니다.

## 공개 전 확정할 내용
- 공식 슬로건·철학에 따른 문구와 순서 조정 (기존 오키나와 페이지 스타일 반영 완료)
- 2027년 7/12 출발, 7/13 1회 + 7/14~17 매일 3회 + 7/18 2회 = 15회 반영 완료
- 7/12 자카르타 1박 포함. 체크아웃·귀국일 확인 필요
- 항공편 운항 여부·출발 공항·편명·현지 시간·환승 가능 여부·귀국편
- 숙박 박수·인원 구성·식사·이동 비용 포함 범위와 서비스차지 부과 단위
- 적용 은행·살 때 환율 종류, 취소·환불 규정, 문의 채널
- config.js 계좌 입력 완료. 계좌 복사와 수동 복사 대체 안내 제공
- 샘플 안내 문구 제거 및 검색 노출 허용 시 robots noindex 수정
- 사진 상업적 이용 허가 확인. 출처 기재 자체는 사용 허가가 아닙니다.

## 사진 출처
공식 원본을 로컬 저장하고 워터마크를 유지했습니다. 외부 사진 로딩에 의존하지 않습니다.
- assets/hero.jpg: https://www.noahmaratuaresort.com/wp-content/uploads/2025/02/img-2502001-noah-maratua-resort-resort-di-kalimantan-utara.jpg
- assets/diving.jpg: https://www.noahmaratuaresort.com/wp-content/uploads/2025/02/img-2502004-noah-maratua-resort-spot-diving-di-kalimantan-utara.jpg
- assets/villa.jpg: https://www.noahmaratuaresort.com/wp-content/uploads/2025/11/noah-maratua-resort-barracuda-villa-05.jpg
- 원문: https://www.noahmaratuaresort.com/ 및 https://www.noahmaratuaresort.com/accomodation/barracuda-villa/

다이빙 참고: https://www.padi.com/dive-site/indonesia/barracuda-point-kakaban/
디자인 참고: https://www.figma.com/resource-library/web-design-trends/

모바일 대응, 스크롤 등장 효과, 페이지 진행 표시, 앵커 이동, 동작 줄이기 설정 대응을 포함합니다. 본문은 JavaScript 없이도 보입니다. 폰트는 Google Fonts Noto Sans KR이며 불러오기 실패 시 시스템 글꼴을 사용합니다.
