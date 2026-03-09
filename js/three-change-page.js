const TakePageIDs = {
    1: document.getElementById('page-1'),
    2: document.getElementById('page-2'),
    3: document.getElementById('page-3'),
}
const TakeBookmarkIDs = {
    1: [
        document.getElementById('bookmark-1'),
        document.getElementById('bookmark-mobile-1'),
    ],
    2: [
        document.getElementById('bookmark-2'),
        document.getElementById('bookmark-mobile-2'),
    ],
    3: [
        document.getElementById('bookmark-3'),
        document.getElementById('bookmark-mobile-3'),
    ],
}

const ACTIVE_BODRER = '5px solid Yellow';
const INACTIVE_BORDER = '0';
const ACTIVE_BACKGROUND = 'var(--color-600)';
const INACTIVE_BACKGROUND = 'var(--color-700)';
function ShowActivedPage(CollectedNumberPage) {
    Object.keys(TakePageIDs).forEach((LookingForPage) => {
        const isActive = Number(LookingForPage) === CollectedNumberPage;
        var PageNumber = LookingForPage;
        const ThisElementIsThisPage = TakePageIDs[PageNumber];
        ThisElementIsThisPage.style.display = isActive ? "block" : "none";

        const ButtonElementsFromBookmarks = TakeBookmarkIDs[PageNumber];
        ButtonElementsFromBookmarks.forEach((BookmarkElement) => {
            BookmarkElement.style.borderLeft = isActive
            ? ACTIVE_BODRER
            : INACTIVE_BORDER;

            BookmarkElement.style.backgroundColor = isActive
            ? ACTIVE_BACKGROUND
            : INACTIVE_BACKGROUND;
        });
    });
}

ShowActivedPage(1);

TakeBookmarkIDs[1].forEach((TakeThisIDsElement) => {
    TakeThisIDsElement.onclick = () => ShowActivedPage(1);
});

TakeBookmarkIDs[2].forEach((TakeThisIDsElement) => {
    TakeThisIDsElement.onclick = () => ShowActivedPage(2);
});


TakeBookmarkIDs[3].forEach((TakeThisIDsElement) => {
    TakeThisIDsElement.onclick = () => ShowActivedPage(3);
});
