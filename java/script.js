window.speechSynthesis.onvoiceschanged = () => {
    console.log("Голоса загружены:", speechSynthesis.getVoices());
  };
  