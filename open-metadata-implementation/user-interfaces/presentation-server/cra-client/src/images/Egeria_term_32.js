/* SPDX-License-Identifier: Apache-2.0 */
/* Copyright Contributors to the ODPi Egeria project. */
import React from "react";
import icon from '../../src/imagesHolder/ODPiEgeria_Icon_glossaryterm.svg'

export default function Egeria_term_32(props) {
  return (
    <img src={icon} height="32" width="32" onClick={props.onClick} alt="A Term, a meaningful word within a glossary." />
  );
}
