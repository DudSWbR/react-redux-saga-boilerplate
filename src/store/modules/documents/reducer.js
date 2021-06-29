import produce from 'immer';
import { Types as DocumentsTypes } from './actions';

const INITIAL_STATE = {
  data: [],
  loading: false,
  infs: {},
  loadingInfs: false,
  finished: {
    name: '',
    reviewRequestAllowed: false,
    canSendSurveyResponse: false,
    mainFile: {
      id: 0,
    },
  },
  price: null,
  statusDocument: null,
  loadingLink: false,
};

export default function documents(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      // GET DOCUMENTS
      case DocumentsTypes.GET_REQUEST: {
        draft.loading = true;
        break;
      }
      case DocumentsTypes.GET_SUCCESS: {
        draft.loading = true;
        draft.data = action.payload;
        break;
      }
      case DocumentsTypes.GET_FAILURE: {
        draft.loading = false;
        break;
      }

      // GET DOCUMENTS INFO
      case DocumentsTypes.GET_DOCUMENT_INFO: {
        draft.loadingInfs = true;
        break;
      }
      case DocumentsTypes.DOCUMENT_INFO_SUCCESS: {
        draft.loadingInfs = false;
        draft.infs = action.payload;
        break;
      }
      case DocumentsTypes.DOCUMENT_INFO_ERROR: {
        draft.loadingInfs = false;
        break;
      }

      // CREATE DOCUMENT
      case DocumentsTypes.CREATE_DOCUMENT: {
        draft.loadingInfs = true;
        break;
      }

      // SET PRICE
      case DocumentsTypes.SET_PRICE: {
        draft.price = action.payload;
        break;
      }
      // STATUS
      case DocumentsTypes.SUCCESS_STATUS_DOCUMENTS: {
        draft.statusDocument = action.payload;
        break;
      }

      // DOC FINISHED
      case DocumentsTypes.GET_DOCUMENT_OVERVIEW: {
        draft.loading = true;
        break;
      }
      case DocumentsTypes.DOCUMENT_OVERVIEW_SUCCESS: {
        draft.loading = false;
        draft.finished = action.payload;
        break;
      }
      case DocumentsTypes.DOCUMENT_OVERVIEW_ERROR: {
        draft.loading = false;
        break;
      }
      case DocumentsTypes.SUCCESS_DOCUMENT_SURVEY: {
        draft.finished.canSendSurveyResponse = false;
        break;
      }

      // DOCBUBBLE LINK
      case DocumentsTypes.GOTO_NEXT_STEP: {
        draft.loadingLink = true;
        break;
      }
      case DocumentsTypes.SUCCESS_NEXT_STEP: {
        draft.loadingLink = false;
        break;
      }
      case DocumentsTypes.ERROR_NEXT_STEP: {
        draft.loadingLink = false;
        break;
      }

      // BACKARROW LINK
      case DocumentsTypes.GOTO_PREVIOUS_STEP: {
        draft.loadingLink = true;
        break;
      }
      case DocumentsTypes.SUCCESS_PREVIOUS_STEP: {
        draft.loadingLink = false;
        break;
      }
      case DocumentsTypes.ERROR_PREVIOUS_STEP: {
        draft.loadingLink = false;
        break;
      }

      default:
    }
  });
}
