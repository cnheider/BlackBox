package dk.danskebank.markets.trading.client;

import dk.danskebank.blackbox.client.IClientContract;
import dk.danskebank.blackbox.client.TradeAction;

public class ClientSample implements IClientContract {

	@Override 
	public String getStrategyName() {
		return "Sample"; 
	} 
  
	@Override 
	public TradeAction tick(double price) {
		return TradeAction.BUY;   
	}
} 