옵션은 데이터 속성이나 JavaScript를 통해 전달할 수 있으므로 `data-bs-`에 옵션 이름을 추가할 수 있습니다(예: `data-bs-animation="{value}"`). 데이터 속성을 통해 옵션을 전달할 때 옵션 이름의 대/소문자 유형을 '_camelCase_'에서 '_kebab-case_'로 변경해야 합니다. 예를 들어 `data-bs-custom-class="beautifier"` 대신 `data-bs-customClass="beautifier"`를 사용합니다.

Bootstrap 5.2.0부터 모든 컴포넌트는 간단한 컴포넌트 구성을 JSON 문자열로 저장할 수 있는 **experimental** 예약 데이터 속성 `data-bs-config`를 지원합니다. 요소에 `data-bs-config='{"delay":0,"title":123}'` 및 `data-bs-title="456"` 속성이 있는 경우 최종 `title` 값은 `456`이 되며 별도의 데이터 속성이 `data-bs-config`에 지정된 값을 재정의합니다. 또한 기존 데이터 속성에는 `data-bs-delay='{"show":0,"hide":150}'`와 같은 JSON 값을 저장할 수 있습니다.

최종 구성 개체는 `data-bs-config`, `data-bs-`, `js object`의 병합된 결과로, 주어진 최신 key-value가 다른 key-value를 재정의합니다.
