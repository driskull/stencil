import { addImports } from '../transform-utils';
import ts from 'typescript';


export function addLazyImports(transformCtx: ts.TransformationContext, tsSourceFile: ts.SourceFile) {
  const importFns = [
    'createEvent as __stencil_createEvent',
    'getConnect as __stencil_getConnect',
    'getContext as __stencil_getContext',
    'getElement as __stencil_getElement',
    'registerInstance as __stencil_registerInstance',
    'h as __stencil_h',
  ];

  return addImports(transformCtx, tsSourceFile, importFns, '@stencil/core/app');
}
