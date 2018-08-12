export const SAVE_USER_DETAILS = 'SAVE_USER_DETAILS';
export const CHANGE_PROGRESS_BAR_PROGRESS = 'CHANGE_PROGRESS_BAR_PROGRESS';
export const ADDRESS_CHANGED = 'ADDRESS_CHANGED';

export function saveUserdetails(details) {
    return {
        type: SAVE_USER_DETAILS,
        payload: details
    }
}

export function changeProgressBarProgress(path) {
    let progress = 0;
    switch(path) {
        case '/':
            progress = 0;
            break;
        case '/address':
            progress = (100 / 3);
            break;
    }
    return {
        type: CHANGE_PROGRESS_BAR_PROGRESS,
        payload: {progress}
    }
}

export function addressChanged(address, isInMaps) {
    return {
        type: ADDRESS_CHANGED,
        payload: {address, isInMaps}
    }
}