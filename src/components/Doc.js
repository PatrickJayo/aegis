import React from 'react';
import './Doc.css';
import Mark from './Mark.js';

function Doc() {
  return (
    <>
      <article>
        <header class="bg-gold sans-serif">
          <div class="mw9 center pa4 pt5-ns ph7-l">
            <time class="f6 mb2 dib ttu tracked" />
            <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
              <span class="bg-black-90 lh-copy white pa1 tracked-tight">
                Syntax and usage
              </span>
            </h3>
            <h4 class="f3 fw1 georgia i">The definitive guide to Aegis.</h4>
          </div>
        </header>
        <div class="pa4 ph7-l georgia mw9-l center">
          <p class="f5 f3-ns lh-copy measure georgia">
            Aegis, a word that is derived from Greek mythology is defined as
            protection, backing, or support to an individual person or
            organization. Similarly, Aegis is a programming language that aims
            to support the user and their experience with the langauge. With
            hints of Java, Aegis was designed to be statically a typed language
            with a more basic and simpler to understand structure, such as
            structuring the language to be similar to pseudo-code as well as
            replacing curly braces with colons for scope limitations. Aegis
            seeks to improve code functionality while honing in on code
            readability!
          </p>
        </div>
      </article>
      <Mark />
    </>
  );
}

export default Doc;
