import * as React from 'react'

import useModel from 'hooks/useModel'

import { ModelContextInterface, ModelProviderProps } from 'types/model'

export const ModelCtx = React.createContext<ModelContextInterface>(null)
ModelCtx.displayName = 'TensorflowModel'

export default function ModelProvider ({
  children,
  url,
  layerModel = false
}: ModelProviderProps) {
  const model = useModel(url, { layers: layerModel })

  return <ModelCtx.Provider value={model}>{children}</ModelCtx.Provider>
}
