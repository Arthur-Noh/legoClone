// 하위
type NavigationDetailButton = {
    title: string,
    path?: string,
    isHeader?: boolean,
};

// 상위
export type NavigationButton = {
    title: string,
    path?: string,
    details?: Array<NavigationDetailButton>,
};

// TODO : 메뉴 바뀔때 마다 정적 타이핑 필요
// 백엔드에서 값 내려주는게 맞다.
export const NAVIGATION_SHOPPING: Array<NavigationButton> = [
    {
        title: '시리즈별 세트',
        path: '/notFound',
        details: [
            {
                title: '모든 시리즈 보기',
                path: '/notFound',
                isHeader: true,
            },
            {
                title: '상세 1',
            },
            {
                title: '상세 2',
            },
        ],
    },
    {
        title: '연령별',
        path: '/notFound',
        details: [
            {
                title: '연령별 제품 모두보기',
                path: '/notFound',
                isHeader: true,
            },
            {
                title: '1.5+',
            },
            {
                title: '4+',
            },
        ],
    },
    {
        title: '가격별',
    },
    {
        title: '레고 상품',
    },
    {
        title: '관심 분야',
    },
    {
        title: '독점 제품',
    },
    {
        title: '신제품',
    },
    {
        title: '베스트셀러',
    },
    {
        title: '홈 데코',
    },
    {
        title: '할인 및 행사',
    },
];

export const NAVIGATION_INTRODUCTION: Array<NavigationButton> = [
    {
        title: '기업 가치',
        details: [
            {
                title: '레고 그룹 소개',
                path: '/notFound',
            },
            {
                title: '레고 소식',
                path: '/notFound',
            },
            {
                title: '지속가능한 사업',
                path: '/notFound',
            },
        ],
    },
    {
        title: '레고 앱',
    },
    {
        title: '레고 매거진',
    },
    {
        title: '레고 전 제품',
    },
];

export const NAVIGATION_SUPPORT: Array<NavigationButton> = [

];