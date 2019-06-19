"use strict!";

var creatorForm = document.getElementById("creator-form");
creatorForm.addEventListener("submit", handler);

function handler(event) {
  event.preventDefault();
  var title = event.target.comicTitle.value;
  var genre1 = event.target.genres.value;
  var genre2 = event.target.genres2.value;
  var rating = event.target.rating.value;
  var summary = event.target.summary.value;
  var oneShot = event.target["one-shot"].value;
  var series = event.target.series.value;
  var name = event.target.name.value;
  var email = event.target.email.value;
  var creator1 = event.target.creator1.value;
  var creator2 = event.target.creator2.value;
  var writer = event.target.writer.value;
  var penciler = event.target.penciler.value;
  var colourist = event.target.colourist.value;
  var inker = event.target.inker.value;
  var coverArtist = event.target.coverArtist.value;
  var letterer = event.target.letterer.value;
  var legalRight = document.creatorForm["legal-right"].value;
  saveInfo(
    title,
    genre1,
    genre2,
    rating,
    summary,
    oneShot,
    series,
    name,
    email,
    creator1,
    creator2,
    writer,
    penciler,
    colourist,
    inker,
    coverArtist,
    letterer,
    legalRight
  );
}

function saveInfo(
  comicTitle,
  genres1,
  genres2,
  rating,
  summary,
  oneShot,
  series,
  name,
  email,
  creator1,
  creator2,
  writer,
  penciler,
  colourist,
  inker,
  coverArtist,
  letterer,
  legalRight
) {
  var creatorInfo = {
    title: comicTitle,
    genre_1: genres1,
    genre_2: genres2,
    rating,
    summary,
    oneShot,
    series,
    name,
    email,
    creator_1: creator1,
    creator_2: creator2,
    writer,
    penciler,
    colourist,
    inker,
    cover_artist: coverArtist,
    letterer,
    legalRight
  };
  localStorage.setItem("creator-form", JSON.stringify(creatorInfo));
}
