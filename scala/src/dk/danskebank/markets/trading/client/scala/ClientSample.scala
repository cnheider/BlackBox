package dk.danskebank.markets.trading.client.scala

import dk.danskebank.blackbox.client.IClientContract
import dk.danskebank.blackbox.client.TradeAction

class ClientSample extends IClientContract {
  def getStrategyName(): String = ???

  def tick(x$1: Double): TradeAction = ???

}