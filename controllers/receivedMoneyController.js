const ReceivedMoney = require('../models/ReceivedMoney');

// Get all receivedMoney for a user
exports.getReceiveMoney = async (req, res) => {
  try {
    const receiveMoney = await ReceivedMoney.find({ user: req.user.id }).sort({ date: -1 });
    res.json(receiveMoney);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add new ReceiveMoney
exports.addReceiveMoney = async (req, res) => {
  const { from, notes, amount, date } = req.body;

  try {
    const newReceivedMoney = new ReceivedMoney({
      user: req.user.id,
      from,
      notes,
      amount,
      date
    });

    const receiveMoney = await newReceivedMoney.save();
    res.status(201).json(receiveMoney);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update receiveMoney
exports.updateReceiveMoney = async (req, res) => {
  try {
    let receiveMoney = await ReceivedMoney.findById(req.params.id);
    
    if (!receiveMoney) {
      return res.status(404).json({ message: 'ReceivedMoney not found' });
    }
    
    // Check if receiveMoney belongs to user
    if (receiveMoney.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    receiveMoney = await ReceivedMoney.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.json(receiveMoney);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete receiveMoney
exports.deleteReceiveMoney = async (req, res) => {
  try {
    let receiveMoney = await ReceivedMoney.findById(req.params.id);
    
    if (!receiveMoney) {
      return res.status(404).json({ message: 'ReceivedMoney not found' });
    }
    
    // Check if receiveMoney belongs to user
    if (receiveMoney.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await ReceivedMoney.findByIdAndDelete(req.params.id);
    res.json({ message: 'ReceivedMoney removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};