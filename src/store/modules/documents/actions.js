export const Types = {
  // document types
  GET_REQUEST: 'documents/GET_REQUEST',
  GET_SUCCESS: 'documents/GET_SUCCESS',
  GET_FAILURE: 'documents/GET_FAILURE',
  SET_PRICE: 'documents/SET_PRICE',

  // document info
  GET_DOCUMENT_INFO: 'documents/GET_DOCUMENT_INFO',
  DOCUMENT_INFO_SUCCESS: 'documents/DOCUMENT_INFO_SUCCESS',
  DOCUMENT_INFO_ERROR: 'documents/DOCUMENT_INFO_ERROR',

  // create document
  CREATE_DOCUMENT: 'documents/CREATE_DOCUMENT',

  // status
  GET_STATUS_DOCUMENTS: 'documents/GET_STATUS_DOCUMENTS',
  SUCCESS_STATUS_DOCUMENTS: 'documents/SUCCESS_STATUS_DOCUMENTS',

  // generate
  GET_GENERATE_DOCUMENTS: 'documents/GET_GENERATE_DOCUMENTS',
  SUCCESS_GENERATE_DOCUMENTS: 'documents/SUCCESS_GENERATE_DOCUMENTS',

  // finished
  GET_DOCUMENT_OVERVIEW: 'documents/GET_DOCUMENT_OVERVIEW',
  DOCUMENT_OVERVIEW_SUCCESS: 'documents/DOCUMENT_OVERVIEW_SUCCESS',
  DOCUMENT_OVERVIEW_ERROR: 'documents/DOCUMENT_OVERVIEW_ERROR',

  // survey
  SEND_DOCUMENT_SURVEY: 'documents/SEND_DOCUMENT_SURVEY',
  SUCCESS_DOCUMENT_SURVEY: 'documents/SUCCESS_DOCUMENT_SURVEY',
  ERROR_DOCUMENT_SURVEY: 'documents/ERROR_DOCUMENT_SURVEY',

  // docbubble link
  GOTO_NEXT_STEP: 'documents/GOTO_NEXT_STEP',
  SUCCESS_NEXT_STEP: 'documents/SUCCESS_NEXT_STEP',
  ERROR_NEXT_STEP: 'documents/ERROR_NEXT_STEP',

  // backarrow link
  GOTO_PREVIOUS_STEP: 'documents/GOTO_PREVIOUS_STEP',
  SUCCESS_PREVIOUS_STEP: 'documents/SUCCESS_PREVIOUS_STEP',
  ERROR_PREVIOUS_STEP: 'documents/ERROR_PREVIOUS_STEP',
};

export const Creators = {
  getDocumentsRequest: () => ({ type: Types.GET_REQUEST }),

  getDocumentsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: data,
  }),
  getDocumentsFailure: () => ({
    type: Types.GET_FAILURE,
  }),
  setPrice: data => ({
    type: Types.SET_PRICE,
    payload: data,
  }),
  getDocumentInfo: data => ({ type: Types.GET_DOCUMENT_INFO, payload: data }),
  documentInfoSuccess: data => ({
    type: Types.DOCUMENT_INFO_SUCCESS,
    payload: data,
  }),
  documentInfoError: () => ({ type: Types.GET_DOCUMENT_INFO }),
  createDocument: data => ({ type: Types.CREATE_DOCUMENT, payload: data }),
  getStatusDocuments: () => ({ type: Types.GET_STATUS_DOCUMENTS }),
  successStatusDocuments: data => ({
    type: Types.SUCCESS_STATUS_DOCUMENTS,
    payload: data,
  }),
  //
  getGenerateDocuments: data => ({
    type: Types.GET_GENERATE_DOCUMENTS,
    payload: data,
  }),
  successGenerateDocuments: () => ({
    type: Types.SUCCESS_GENERATE_DOCUMENTS,
  }),
  getDocumentOverview: () => ({ type: Types.GET_DOCUMENT_OVERVIEW }),
  documentOverviewSuccess: data => ({
    type: Types.DOCUMENT_OVERVIEW_SUCCESS,
    payload: data,
  }),
  documentOverviewError: () => ({ type: Types.DOCUMENT_OVERVIEW_ERROR }),
  sendDocumentSurvey: data => ({
    type: Types.SEND_DOCUMENT_SURVEY,
    payload: data,
  }),
  successDocumentSurvey: () => ({ type: Types.SUCCESS_DOCUMENT_SURVEY }),
  errorDocumentSurvey: () => ({ type: Types.ERROR_DOCUMENT_SURVEY }),
  gotoNextStep: data => ({ type: Types.GOTO_NEXT_STEP, payload: data }),
  successNextStep: () => ({ type: Types.SUCCESS_NEXT_STEP }),
  errorNextStep: () => ({ type: Types.ERROR_NEXT_STEP }),
  gotoPreviousStep: data => ({ type: Types.GOTO_PREVIOUS_STEP, payload: data }),
  successPreviousStep: () => ({ type: Types.SUCCESS_PREVIOUS_STEP }),
  errorPreviousStep: () => ({ type: Types.ERROR_PREVIOUS_STEP }),
};
