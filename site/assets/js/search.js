// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2024-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

import docsearch from '@docsearch/js'
// https://gohugo.io/hugo-pipes/js/#options
// eslint-disable-next-line import/no-unresolved
import { appId, apiKey, indexName } from '@params';

(() => {
  const searchElement = document.getElementById('docsearch')

  if (!searchElement) {
    return
  }

  const siteDocsVersion = searchElement.getAttribute('data-bd-docs-version')

  const koPlaceholder = '문서 검색하기'

  const koTranslations = {
    button: {
      buttonText: '검색',
      buttonAriaLabel: '검색'
    },
    modal: {
      searchBox: {
        resetButtonTitle: '지우기',
        resetButtonAriaLabel: '지우기',
        cancelButtonText: '취소',
        cancelButtonAriaLabel: '취소'
      },
      startScreen: {
        recentSearchesTitle: '최근 검색어',
        noRecentSearchesText: '최근 검색어 없음',
        saveRecentSearchButtonTitle: '이 검색어 저장',
        removeRecentSearchButtonTitle: '최근 검색어에서 삭제',
        favoriteSearchesTitle: '즐겨찾기',
        removeFavoriteSearchButtonTitle: '즐겨찾기에서 삭제'
      },
      errorScreen: {
        titleText: '결과를 불러올 수 없음',
        helpText: '인터넷 연결을 확인해보세요.'
      },
      footer: {
        selectText: '선택',
        selectKeyAriaLabel: 'Enter 키',
        navigateText: '이동',
        navigateUpKeyAriaLabel: '위쪽 화살표',
        navigateDownKeyAriaLabel: '아래쪽 화살표',
        closeText: '닫기',
        closeKeyAriaLabel: 'Esc 키',
        searchByText: '검색 제공자:'
      },
      noResultsScreen: {
        noResultsText: '다음 검색어에 대한 결과 없음:',
        suggestedQueryText: '이 검색어로 시도해보세요:',
        reportMissingResultsText: '이 검색어가 검색되지 않는 것에 문제가 있다고 생각하시나요?',
        reportMissingResultsLinkText: '그렇다면 저희에게 알려주세요.'
      }
    }
  }

  docsearch({
    apiKey,
    indexName,
    appId,
    container: searchElement,
    placeholder: koPlaceholder,
    translations: koTranslations,
    searchParameters: {
      facetFilters: [`version:${siteDocsVersion}`]
    },
    transformItems(items) {
      return items.map(item => {
        const liveUrl = 'https://getbootstrap.kr/'

        item.url = window.location.origin.startsWith(liveUrl) ?
          // On production, return the result as is
          item.url :
          // On development or Netlify, replace `item.url` with a trailing slash,
          // so that the result link is relative to the server root
          item.url.replace(liveUrl, '/')

        // Prevent jumping to first header
        if (item.anchor === 'content') {
          item.url = item.url.replace(/#content$/, '')
          item.anchor = null
        }

        return item
      })
    }
  })
})()
