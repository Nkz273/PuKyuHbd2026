body {
  background: linear-gradient(180deg, #1e3c72, #2a5298);
  color: white;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont;
  padding: 30px 15px;
}

h1 {
  margin-bottom: 5px;
}

.hint {
  opacity: 0.9;
  margin-bottom: 30px;
}

.cake-container {
  font-size: 100px;
  position: relative;
  margin: 30px 0;
}

.candle {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
}

.flame {
  width: 20px;
  height: 30px;
  background: orange;
  border-radius: 50%;
  animation: flicker 0.2s infinite alternate;
}

@keyframes flicker {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}

button {
  padding: 12px 20px;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  background: #ffcc70;
  color: #333;
}

.hidden {
  display: none;
}

#surprise {
  margin-top: 40px;
  animation: fadeIn 1.5s;
}

#surprise img {
  width: 200px;
  border-radius: 20px;
}

.love-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 15px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}