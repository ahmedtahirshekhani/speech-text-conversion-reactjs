/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3.

Purpose:
index.js is part of a tutorial demonstrating how to:
- Transcribe speech in real-time using Amazon Transcribe
- Detect the language of the transcription using Amazon Comprehend
- Translate the transcription using Amazon Translate
- Send the transcription and translation by email using Amazon Simple Email Service (Amazon SES)
*/

// snippet-start:[transcribe.JavaScript.streaming.indexv3]
import * as TranscribeClient from "./transcribeClient.js";
import * as TranslateClient from "./translateClient.js";
import * as EmailClient from "./emailClient.js";

const recordButton = document.getElementById("record");
const inputLanguageList = document.getElementById("inputLanguageList");
const transcribedText = document.getElementById("transcribedText");
const translatedText = document.getElementById("translatedText");
const translationLanguageList = document.getElementById("translationLanguageList");
const email = document.getElementById("email");

const onRecordPress = (e) => {
    if (e.target.getAttribute("class") === "recordInactive") {
            startRecording();
  } else {
    stopRecording();
  }
};

const startRecording = async() => {
  clearTranscription();
  const inputLanguageList = document.getElementById("inputLanguageList");
  const selectedLanguage = inputLanguageList.value;
  const recordButton = document.getElementById("record");

  if (selectedLanguage === "nan") {
    alert("Please select a language");
    return;
  }
  inputLanguageList.disabled = true;
  recordButton.setAttribute("class", "recordActive");
  try {
    console.log("Starting recording");
    await TranscribeClient.startRecording(selectedLanguage, onTranscriptionDataReceived);
  } catch(error) {
    //alert("There was an error starting the recording: " + error);
    console.log("There was an error starting the recording: " + error);
    alert("An error occurred while recording: " + error.message);
    stopRecording();
  }
};

const onTranscriptionDataReceived = (data) => {
    const transcribedText = document.getElementById("transcribedText");
    console.log("Transcription data received: " + data.Transcript);
  transcribedText.insertAdjacentHTML("beforeend", data);
}

const stopRecording = function () {
  console.log("Stopping recording");
const inputLanguageList = document.getElementById("inputLanguageList");
const recordButton = document.getElementById("record");

  inputLanguageList.disabled = false;
  recordButton.setAttribute("class", "recordInactive");
  TranscribeClient.stopRecording();
};


const clearTranscription = () => {
    if (transcribedText) {
        transcribedText.innerHTML = "";
    }
};

// snippet-end:[transcribe.JavaScript.streaming.indexv3]

export { startRecording, stopRecording, onTranscriptionDataReceived, onRecordPress};
